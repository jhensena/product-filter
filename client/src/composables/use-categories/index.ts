import { onMounted, ref } from 'vue';
import { CategoryEntity } from '../../entities';
import { useAxios } from '../use-axios';

export const useCategories = (fetch = true) => {
  const { get } = useAxios();

  const category = ref(new CategoryEntity());

  const getCategory = async () => {
    category.value = await get<CategoryEntity>('/categories/get-one', undefined, undefined);
  };

  onMounted(async () => {
    if (fetch) {
      await getCategory();
    }
  });

  return {
    getCategory,
    category
  };
};
