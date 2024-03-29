import { createI18n } from "vue-i18n";
import { Locales, messages } from "@/locales/locales";

const defaultLocale = Locales.Ar;

export default createI18n({
  legacy: false,
  messages: messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});
