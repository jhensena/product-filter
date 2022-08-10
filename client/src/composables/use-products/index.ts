import { onMounted, ref, watch } from 'vue';
import { ProductEntity } from '../../entities';
import { ProductResponse } from '../../global';
import { useAxios } from '../use-axios';
import { useCategories } from '../use-categories';

export const useProducts = () => {
  const { get } = useAxios();
  const { category, getCategory } = useCategories(false);

  const selectedProductAttributes = ref<Array<string>>([]);
  const selectedManafacturers = ref<Array<string>>([]);
  const products = ref<Array<ProductEntity>>([]);
  const attributes = ref<ProductResponse['attributes']>([]);

  const getProducts = async () => {
    const data = await get<ProductResponse>(`/products/${category.value.id}`, undefined, undefined, {
      filter: { attributes: selectedProductAttributes.value, manufacturers: selectedManafacturers.value }
    });

    products.value = data.products;
    attributes.value = data.attributes;
  };

  onMounted(async () => {
    await getCategory();
    await getProducts();
  });

  watch(
    [selectedManafacturers, selectedProductAttributes],
    () => {
      getProducts();
    },
    { deep: true }
  );

  return {
    products,
    attributes,
    selectedProductAttributes,
    selectedManafacturers
  };
};
