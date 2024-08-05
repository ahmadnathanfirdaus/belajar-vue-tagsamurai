import { App } from 'vue';
import PrimeVue from 'primevue/config';
import Preset from 'presets';

import '@/assets/css/main.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const registerComponents = (app: App): void => {
  app.use(PrimeVue, {
    unstyled: true,
    pt: Preset,
  });
};

export default registerComponents;
