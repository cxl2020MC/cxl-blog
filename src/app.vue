<script setup lang="ts">
import "~/assets/css/stylus.css";

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  margin: 0;
}

*::-webkit-scrollbar {
  width: 0.5em;
}

*::-webkit-scrollbar-thumb {
  background: skyblue;
  height: 0.5em;
  border-radius: 999em;
}

*::-webkit-scrollbar-track {
  background: #f1f1f1;
  /* border-radius: 999em; */
}
</style>
