const themeKey: string = "theme";
const localeKey: string = "locale";

export function setTheme(val: string): void {
  localStorage.setItem(themeKey, val);
}

export function getTheme(): string | null {
  return localStorage.getItem(themeKey);
}

export function setLocale(val: string): void {
  localStorage.setItem(localeKey, val);
}

export function getLocale(): string | null {
  return localStorage.getItem(localeKey);
}
