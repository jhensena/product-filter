<script setup lang="ts">
import { useLoading } from '../../composables';

const { isLoading } = useLoading();
</script>

<template>
  <div class="uk-overlay-primary uk-position-cover uk-position-z-index" v-show="isLoading">
    <div class="uk-position-center">
      <span uk-spinner="ratio: 2" />
    </div>
  </div>
</template>
