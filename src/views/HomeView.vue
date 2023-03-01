<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import TodoService from "@/services/TodoService";

const todos = await TodoService.findByTitle("quis");
console.log(todos);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
