<script setup lang="ts">
defineProps({ label: { type: String, required: true } });
</script>

<template>
  <label>
    <input class="uk-checkbox" type="checkbox" v-bind="$attrs"> {{ label }}
  </label>
</template>
