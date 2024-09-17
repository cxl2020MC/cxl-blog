<script setup lang="ts">

</script>

<template>
    <NuxtLoadingIndicator color="var(--theme-color)" />
    <BlogHeader />
    <div class="main">
        <main>
            <slot />
        </main>
        <BlogAside />
    </div>
    <BlogFooter />
</template>

<style scoped>
.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
main {
    flex: 1 1 40em;
}

.aside {
    flex: 1 1 10em;
}
    
@media (min-width: 50em) {
    main {
        max-width: 75em;
    }
    .aside {
        max-width: 20em;
    }
}
</style>