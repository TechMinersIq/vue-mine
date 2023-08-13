<template>
  <v-app-bar flat color="grey-darken-4">
    <!-- <v-app-bar-nav-icon v-show="$vuetify.display.smAndDown" theme="dark" @click="props.toggleDrawer" /> -->
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
