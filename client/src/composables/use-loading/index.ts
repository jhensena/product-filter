import { ref } from 'vue';

const isLoading = ref(false);

export const useLoading = () => {
  const start = () => {
    isLoading.value = true;
  };

  const finish = () => {
    isLoading.value = false;
  };

  return {
    isLoading,
    start,
    finish
  };
};
