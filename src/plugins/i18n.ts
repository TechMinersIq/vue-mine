import { createI18n } from "vue-i18n";
import { Locales, messages } from "@/locales/locales";

const defaultLocale = Locales.EN;

export default createI18n({
  messages: messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});
