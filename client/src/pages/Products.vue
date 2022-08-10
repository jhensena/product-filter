<script setup lang="ts">
import ProductCard from '../components/shared/product/Card.vue'
</script>

<template>
  <div class="uk-container uk-container-large uk-padding">
    <h1 class="uk-heading-small">Product Filtering Programming Test</h1>
    <div class="uk-flex uk-flex-wrap uk-flex-wrap-around">
      <div class="uk-width-1-4">
        <h3>6 Products Found</h3>
        <ul class="uk-list">
          <li>
            <strong>Manufacturer</strong>
            <ul class="uk-list">
              <li>
                <base-checkbox label="Iams" />
              </li>
              <li>
                <base-checkbox label="Hills Science Diet" />
              </li>
            </ul>
          </li>
          <li>
            <strong>Bag Weight (lbs.)</strong>
            <ul class="uk-list">
              <li>
                <base-checkbox label="7" />
              </li>
              <li>
                <base-checkbox label="15" />
              </li>
              <li>
                <base-checkbox label="30" />
              </li>
            </ul>
          </li>
          <li>
            <strong>Breed Size</strong>
            <ul class="uk-list">
              <li>
                <base-checkbox label="Small" />
              </li>
              <li>
                <base-checkbox label="Medium" />
              </li>
              <li>
                <base-checkbox label="Large" />
              </li>
            </ul>
          </li>
          <li>
            <strong>Age</strong>
            <ul class="uk-list">
              <li>
                <base-checkbox label="Adult" />
              </li>
              <li>
                <base-checkbox label="Mature" />
              </li>
              <li>
                <base-checkbox label="Puppy" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="uk-width-3-4">
        <ul class="uk-list">
          <ProductCard />
        </ul>
      </div>
    </div>
  </div>
</template>