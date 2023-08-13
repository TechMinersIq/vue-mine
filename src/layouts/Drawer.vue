<template>
  <v-navigation-drawer
    color="indigo-darken-4"
    theme="dark"
    permanent
    :rail="!$vuetify.display.mdAndUp"
  >
    <template v-slot:prepend>
      <v-list-item
        class="pa-2"
        lines="two"
        prepend-avatar="https://avatars.githubusercontent.com/u/38330943?v=4"
        title="Zaid Kindman"
        subtitle="Welcome back"
      ></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        :title="$t('drawer.home')"
        to="/"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        :title="$t('drawer.about')"
        to="/about"
        value="about"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn variant="flat" color="red-darken-4" block>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
const props = defineProps({
  drawer: {
    type: Boolean,
    required: true,
  },
});
</script>
