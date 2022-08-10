import { Filter } from './types';

export const serializeQuery = (params: Filter, prefix = '') => {
  const query: Array<string | undefined> = Object.keys(params).map(key => {
    const value = params[key as keyof Filter];

    if (params.constructor === Array) key = `${prefix}[]`;
    else if (params.constructor === Object) key = prefix ? `${prefix}[${key}]` : key;

    if (typeof value === 'object') return serializeQuery(value, key);
    else if (value) return `${key}=${encodeURIComponent(value as string)}`;
  });

  return ([] as Array<string>).concat
    .apply(
      [],
      (query as Array<string>).filter(q => q)
    )
    .join('&');
};
