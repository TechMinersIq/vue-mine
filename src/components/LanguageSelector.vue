<template>
  <v-select
    :label="$t('appBar.language')"
    density="compact"
    variant="outlined"
    v-model="locale"
    class="mt-5 mx-2"
    @update:modelValue="changeLocale"
    :items="locales"
    item-title="text"
    item-value="value"
  ></v-select>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useLocale } from "vuetify";
import { setLocale, getLocale } from "@/data/SystemLocalStorage";

const { current } = useLocale();
const currentLocale: string | null = getLocale();

const locale = ref("");

const locales = ref([
  {
    text: "English",
    value: "en",
  },
  {
    text: "العربية",
    value: "ar",
  },
]);

if (currentLocale) locale.value = currentLocale;
else locale.value = "ar";

const changeLocale = (value: string) => {
  setLocale(value);
  current.value = value;
  locale.value = value;
};
</script>
