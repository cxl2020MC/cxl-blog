<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
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
    justify-content: center;
}

.post-list {
    flex: 1 1 40em;
}

.aside {
    flex: 1 1 10em;
}
    
@media (min-width: 50em) {
    .post-list{
        max-width: 75em;
    }
    .aside {
        max-width: 20em;
    }
}
</style>
