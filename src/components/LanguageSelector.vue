<template>
  <v-select
    :label="$t('appBar.language')"
    density="compact"
    v-model="locale"
    class="mt-5 mx-2"
    @update:modelValue="changeLocale"
    :items="['ar', 'en']"
  ></v-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useLocale } from "vuetify";

const { current } = useLocale();

const locale = ref("en");
const changeLocale = (value: string) => {
  current.value = value;
};
</script>
