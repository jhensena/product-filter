<script setup lang="ts">
import ProductCard from '../components/shared/product/Card.vue';
import { useProducts } from '../composables';

const { products, attributes, selectedProductAttributes, selectedManafacturers } = useProducts();

const manufacturerPrefix = ':manufacturer:'

const onCheckboxChange = (event: InputEvent) => {
  const { checked, value } = event.target as HTMLInputElement

  const isManufacturer = value.startsWith(manufacturerPrefix)
  const selectedRef = isManufacturer ? selectedManafacturers : selectedProductAttributes;
  const selectedValue = isManufacturer ? value.replace(manufacturerPrefix, '') : value

  if (checked) {
    selectedRef.value.push(selectedValue)
  } else {
    const index = selectedRef.value.indexOf(selectedValue)
    index > -1 && selectedRef.value.splice(index);
  }
}
</script>

<template>
  <div class="uk-container uk-container-large uk-padding">
    <h1 class="uk-heading-small">Product Filtering Programming Test</h1>
    <div class="uk-flex uk-flex-wrap uk-flex-wrap-around">
      <div class="uk-width-1-4">
        <h3>{{ products.length }} Products Found</h3>
        <ul class="uk-list">
          <li v-for="{ categoryAttribute: { displayName, id }, productAttributes } in attributes" :key="id">
            <strong>{{ displayName }}</strong>
            <ul class="uk-list">
              <li v-for="productAttribute in productAttributes">
                <base-checkbox :label="productAttribute.attributeValue" :value="productAttribute.attributeValue"
                  :disabled="!productAttribute.enabled" v-if="'attributeValue' in productAttribute"
                  @change.stop="onCheckboxChange" />
                <base-checkbox v-else :label="productAttribute.displayName"
                  :value="`${manufacturerPrefix}${productAttribute.id}`" :disabled="!productAttribute.enabled"
                  @change.stop="onCheckboxChange" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="uk-width-3-4">
        <ul class="uk-list">
          <li v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
