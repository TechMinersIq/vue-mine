<template>
  <v-app id="inspire">
    <!-- Drawer -->
    <Drawer :drawer="drawer" />

    <!-- App Bar -->
    <AppBar :toggleDrawer="toggleDrawer" />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Drawer from "./Drawer.vue";
import AppBar from "./AppBar.vue";

import { ref } from "vue";
const drawer = ref(true);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
