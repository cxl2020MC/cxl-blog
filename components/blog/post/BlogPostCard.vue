<template>
    <div class="article-card">
        <div class="article-image">
            <a :href="article.link">
                <img :src="article.cover" :alt="article.title" loading="lazy" />
            </a>
        </div>
        <div class="article-info">
            <a :href="article.link">
                <h3>{{ article.title }}</h3>
            </a>
            <p>{{ article.description }}</p>
            <p></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types/article'

defineProps<{
    article: Article
}>()

</script>

<style scoped>
.article-card {
    display: flex;
    width: 100%;
    height: 15em;
    overflow: hidden;
    border: var(--card-border);
    border-radius: var(--card-border-radius);
    background: var(--card-bg);
    transition: border .3s ease-in-out;
}

.article-card:hover {
    border: var(--card-border-hover)
}

.article-card:hover .article-image img {
    scale: 1.1;
}

.article-card .article-image {
    width: 40%;
    height: 100%;
    overflow: hidden;
}

.article-card .article-image img {
    height: 100%;
    width: 100%;
    object-position: center;
    object-fit: cover;
    transition: .3s ease-in-out;
}

.article-info {
    padding: 1em;
    /* margin-bottom: auto; */
}

.article-info a {
    color: var(--text-color);
    transition: .3s ease-in-out;
}

.article-info a:hover {
    color: var(--theme-color);
}

.article-info h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
}

.article-info p {
    margin: 0.5rem 0;
    font-size: 1rem;
}
</style>