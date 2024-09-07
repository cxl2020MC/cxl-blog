<script setup lang="ts">
import type { Article } from '~/types/article';

useHead({
    title: "主页",
    meta: [
        {
            name: "description",
            content: "主页",
        },
    ],
})

const api_url = useRuntimeConfig().public.api_url
const req = await useFetch<{
    data: Array<Article>
}>(`${api_url}/postlist`)
const articles = req.data

console.log(articles.value)

</script>

<template>
    <div id="post-list">
        <template v-if="articles">
            <BlogPostCard v-for="article in articles.data" :key="article.id" :article="article" />
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