import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

export enum Locales {
  EN = "en",
  Ar = "ar",
}

export const messages = {
  [Locales.EN]: en,
  [Locales.Ar]: ar,
};
