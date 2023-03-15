<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>{{ $t("system.title") }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(true);
</script>
