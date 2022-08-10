<script setup lang="ts">
defineProps();
</script>

<template>
  <li class="uk-card uk-card-default">
    <div class="uk-padding uk-flex">
      <div class="uk-width-1-4 uk-text-center">
        <img src="https://image.chewy.com/is/image/catalog/62299_MAIN._AC_SS150_V1657660703_.jpg">
      </div>
      <div class="uk-width-3-4">
        <div class="uk-flex">
          <div class="uk-width-3-4">
            <h2 class="uk-margin-remove-bottom">Product Name Here</h2>
          </div>
          <div class="uk-width-1-4 uk-text-right">
            <span class="uk-heading-small">$19.99</span>
          </div>
        </div>
        <p class="uk-text-small uk-margin-remove-top">Manufacturer Name Here</p>
        <ul class="uk-list">
          <li class="uk-margin-remove-top">
            <span class="uk-text-small uk-text-bold">Bag Weight (lbs.)</span> <span class="uk-text-small">Attribute
              Value</span>
          </li>
          <li class="uk-margin-remove-top">
            <span class="uk-text-small uk-text-bold">Breed Size</span> <span class="uk-text-small">
              Attribute Value
            </span>
          </li>
          <li class="uk-margin-remove-top">
            <span class="uk-text-small uk-text-bold">Age</span> <span class="uk-text-small">
              Attribute Value
            </span>
          </li>
        </ul>
        <div class="uk-text-right">
          <button class="uk-button uk-button-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </li>
</template>
