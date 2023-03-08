<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        {{ $t("systemMeta.title") }}
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
