<script setup lang="ts">
import BlogPostList from '~/components/blog/post/BlogPostList.vue';

</script>

<template>
    <div class="main">
        <BlogPostList />
        <BlogAside />
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-wrap: wrap;
}

.post-list {
    flex: 1 1 50em;
}

.aside {
    flex: 1 1 10em;
    max-width: 15em;
}
</style>
