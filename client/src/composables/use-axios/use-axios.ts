import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { serializeQuery } from '../../global';

const apiBaseUrl = import.meta.env.VUE_API_URL;

axios.defaults.baseURL = apiBaseUrl;

export const useAxios = () => {
  const request = (method: Method) => {
    return async <
      T = unknown,
      S = unknown,
      R extends Record<string, string | number | boolean | undefined> = Record<
        string,
        string | number | boolean | undefined
      >
    >(
      url: string,
      body?: S,
      config?: AxiosRequestConfig,
      options?: { filter?: R }
    ): Promise<T> => {
      const requestConfig: AxiosRequestConfig = {
        ...config,
        method,
      };
      if (body) {
        requestConfig.headers!['Content-Type'] = 'application/json';
        requestConfig.data = body;
      }

      const requestUrl = `${url}${options?.filter ? `?${serializeQuery(options.filter)}` : ''}`;

      try {
        const response = await axios(requestUrl, requestConfig);
        return handleResponse<T>(response);
      } catch (e) {
        return handleResponse(e as AxiosError);
      }
    };
  };

  const handleResponse = <T = unknown>(response: AxiosResponse | AxiosError) => {
    if ('data' in response) {
      return response.data as T;
    } else {
      const error = (response.response?.data as string | { message: string }) ?? 'Something went wrong.';
      const errorMessage = typeof error === 'object' ? error?.message : error;
      return Promise.reject(errorMessage);
    }
  };

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    patch: request('PATCH'),
    del: request('DELETE'),
  };
};
