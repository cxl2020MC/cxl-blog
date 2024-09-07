<template>
    <div class="post-list">
        <template v-if="articles">
            <BlogPostCard v-for="article in articles.data" :key="article._id" :article="article" />
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
.post-list {
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
}
</style>