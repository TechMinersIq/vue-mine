<template>
  <v-btn @click="toggleTheme" icon>
    <v-icon large color="amber">mdi-theme-light-dark</v-icon>
  </v-btn>
</template>
<script setup lang="ts">
import { useTheme } from "vuetify";
import { setTheme } from "@/data/SystemLocalStorage";

const theme = useTheme();
const toggleTheme = () => {
  const themeInverse: string = theme.global.current.value.dark
    ? "light"
    : "dark";
  theme.global.name.value = themeInverse;
  setTheme(themeInverse);
};
</script>
