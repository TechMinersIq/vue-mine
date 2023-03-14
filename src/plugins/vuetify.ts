import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { aliases, mdi } from "vuetify/iconsets/mdi";
import { md2 } from "vuetify/blueprints";
import { createVuetify } from "vuetify";
import i18n from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      myCustomLightTheme,
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  blueprint: md2,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
