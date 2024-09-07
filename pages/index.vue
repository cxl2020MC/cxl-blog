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
    flex: 1 1 auto;
}

.aside {}

@media (min-width: 768px) {
    .aside {
        width: 300px;
    }
}
</style>