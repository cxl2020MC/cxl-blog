<template>
    <div id="post-list">
        <template v-if="articles">
            <BlogPostCard v-for="article in articles.data" :key="article.id" :article="article" />
        </template>
    </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/types/article';

const api_url = useRuntimeConfig().public.api_url
const req = await useFetch < {
    data: Array < Article >
} > (`${api_url}/postlist`)
const articles = req.data

console.log(articles.value)

</script>

<style scoped>
#post-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
</style>