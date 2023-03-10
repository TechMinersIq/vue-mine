<template>
  <v-container>
    <v-card flat>
      <v-toolbar color="primary">
        <h1>{{ $t("system.title") }}</h1>
      </v-toolbar>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { useLocale } from "vuetify";

const { current } = useLocale();

const changeLocale = (locale: string) => {
  current.value = locale;
};
</script>
