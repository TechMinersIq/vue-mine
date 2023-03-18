<template>
  <v-app-bar flat>
    <!-- <v-app-bar-nav-icon @click="props.toggleDrawer" /> -->
    <v-toolbar-title>{{ $t("system.title") }}</v-toolbar-title>
    <v-spacer />
    <LanguageSelector />
    <ThemeSwitcher />
  </v-app-bar>
</template>

<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
const props = defineProps({
  toggleDrawer: {
    type: Function,
    required: true,
  },
});
</script>
