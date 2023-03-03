import { createI18n } from "vue-i18n";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

enum Locales {
  EN = "en",
  FR = "fr",
}

const messages = {
  [Locales.EN]: en,
  [Locales.FR]: fr,
};

const defaultLocale = Locales.EN;

const languageSettings = createI18n({
  messages: messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

export default languageSettings;
