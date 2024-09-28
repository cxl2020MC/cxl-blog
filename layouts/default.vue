<script setup lang="ts">

</script>

<template>
    <NuxtLoadingIndicator color="var(--theme-color)" />
    <BlogHeader />
    <main>
        <div class="content">
            <slot />
        </div>
        <BlogAside class="aside" />
    </main>
    <BlogFooter />
</template>

<style scoped>
main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* overflow-x: auto; */
}
.content {
    flex: 1 1 40em;
    /* 子元素溢出，代码块无滚动条，以下2种方式均可修复 */
    /* min-width: 0; */
    overflow-x: auto;
}

.aside {
    flex: 1 1 10em;
}
    
@media (min-width: 50em) {
    .content {
        max-width: 75em;
    }
    .aside {
        max-width: 20em;
    }
}
</style>