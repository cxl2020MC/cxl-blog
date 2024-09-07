<script setup lang="ts">
const article = {
        title: "原生启动",
        description: "114514",
        image: "/img/68a24fdabc5f07601f73b1397a4d3a4a.avif",
        link: "ys",
    }
</script>

<template>
    <div id="post-list">
        <template v-for="item in 3" :key="item">
            <BlogPostCard :article="article"/>
        </template>
    </div>
    <BlogAside />
</template>

<style scoped>
#post-list {
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
}
</style>