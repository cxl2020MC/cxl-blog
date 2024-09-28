<script lang="ts" setup>
import renderMarkdown from '@/utils/renderMarkdown'
import '~/assets/css/markdown.css'

const { params } = useRoute()
const config = useRuntimeConfig()
const api_url = config.public.apiBase

const { data } = await useFetch<{
    data: {
        md_content: string
    }
}>(`${api_url}/posts/${params.id}`)
const post = data.value
console.log(post)
const md_html = await renderMarkdown(post.data.md_content)
console.log(md_html)
</script>

<template>
    <div class="post-content card" v-html="md_html">
    </div>
</template>

<style scoped>

/* @import '~/assets/css/markdown.css' */
</style>