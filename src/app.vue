<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig)
console.log(runtimeConfig.public.apiBase)

</script>

<template>

  <p>{{ $config.public.BuildTime }}</p>
</template>
