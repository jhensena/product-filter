import { createApp } from 'vue';
import App from './App.vue';
import './components';
import { initComponents } from './components';

const app = createApp(App);

initComponents(app);

app.mount('#app');
