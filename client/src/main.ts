import { createApp } from 'vue';
import App from './App.vue';
import { initComponents } from './components';

const app = createApp(App);

initComponents(app);

app.mount('#app');
