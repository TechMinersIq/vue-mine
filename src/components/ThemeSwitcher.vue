<template>
  <v-btn @click="toggleTheme" icon>
    <v-icon large color="amber">mdi-theme-light-dark</v-icon>
  </v-btn>
</template>
<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>
