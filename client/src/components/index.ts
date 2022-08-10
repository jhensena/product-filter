import { App } from 'vue';
import BaseCheckbox from './base/Checkbox.vue';

export const initComponents = (app: App) => {
  app.component('base-checkbox', BaseCheckbox);
};
