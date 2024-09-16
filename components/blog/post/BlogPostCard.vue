<template>
    <div class="article-card">
        <div class="article-image">
            <a :href="article.link">
                <img :src="article.cover" :alt="article.title" />
            </a>
        </div>
        <div class="article-info">
            <a :href="article.link">
                <h3>{{ article.title }}</h3>
            </a>
            <p>{{ article.description }}</p>
            <div class="article-metas">
                <div class="article-meta">
                    <Icon name="fa6-solid:calendar-days" />
                    发布于：{{ formatDate(article.created_at) }}
                </div>
                <div class="article-meta">
                    <Icon name="fa6-solid:clock" />
                    更新于：{{ formatDate(article.updated_at) }}
                </div>
                <div  class="article-meta" v-if="article.tags?.length">
                    <Icon name="fa6-solid:tags" /> {{ article.tags.join(', ') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import type { Article } from '~/types/article'

defineProps<{
    article: Article
}>()

function formatDate(date: number) {
    // const dateObj = new Date(date)
    return moment.unix(date).format("YYYY-MM-DD")
}

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
    overflow: hidden;
}

@media (max-width: 50em) {
    .article-card {
        height: auto;
        flex-direction: column;
    }

    .article-card .article-image {
        width: 100%;
        height: 10em;
    }
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

.article-metas {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 0.5em;
    font-size: 0.8em;
    color: var(--text-color-secondary);
}

.article-meta {
    display: flex;
    align-items: center;
    gap: 0.2em;
}
</style>
