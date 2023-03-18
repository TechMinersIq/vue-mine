<template>
  <v-navigation-drawer theme="dark" rail permanent>
    <v-list-item
      nav
      prepend-avatar="https://avatars.githubusercontent.com/u/124864700?s=200&v=4"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        value="dashboard"
      ></v-list-item>

      <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn variant="plain" icon
          ><v-icon color="red">mdi-logout</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <v-navigation-drawer
    class="bg-deep-purple"
    theme="dark"
    v-model="props.drawer"
  >
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      ></v-list-item>
    </v-list>
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
