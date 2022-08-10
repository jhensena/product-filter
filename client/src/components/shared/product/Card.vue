<script setup lang="ts">
import { ProductEntity } from '../../../entities';

defineProps<{ product: ProductEntity }>();
</script>

<template>
  <li class="uk-card uk-card-default">
    <div class="uk-padding uk-flex">
      <div class="uk-width-1-4 uk-text-center">
        <img :src="product.imageUrl">
      </div>
      <div class="uk-width-3-4">
        <div class="uk-flex">
          <div class="uk-width-3-4">
            <h2 class="uk-margin-remove-bottom">{{ product.displayName }}</h2>
          </div>
          <div class="uk-width-1-4 uk-text-right">
            <span class="uk-heading-small">{{ product.price }}</span>
          </div>
        </div>
        <p class="uk-text-small uk-margin-remove-top">{{ product.manufacturer.displayName }}</p>
        <ul class="uk-list">
          <li class="uk-margin-remove-top"
            v-for="{ attributeKey: { displayName }, attributeValue } in product.attributes">
            <span class="uk-text-small uk-text-bold">{{ displayName }}</span>&nbsp;
            <span class="uk-text-small">{{ attributeValue }}</span>
          </li>
        </ul>
        <div class="uk-text-right">
          <button class="uk-button uk-button-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </li>
</template>
