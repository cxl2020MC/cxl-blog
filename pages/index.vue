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

// const articles:Array<Article> = await useFetch(`${api_url}/api/getArticles`)


// const article = {
//         title: "原生启动",
//         description: "114514",
//         image: "/img/68a24fdabc5f07601f73b1397a4d3a4a.avif",
//         link: "ys",
//     }
</script>

<template>
    <div id="post-list">
        <template v-if="articles">
            <BlogPostCard v-for="article in articles.data" :article="article"/>
        </template>
    </div>
</template>

<style scoped>
#post-list {
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
}
</style>