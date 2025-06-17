import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles'; // Vuetify'nin CSS'ini dahil edin
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons

const vuetify = createVuetify({
  components,
  directives,
  // Buraya tema ayarlarınızı ekleyebilirsiniz (isteğe bağlı)
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#ffd700', // Altın
          secondary: '#6a4f3b', // Koyu Ahşap
          // ...
        },
      },
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');