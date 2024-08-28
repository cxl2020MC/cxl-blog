<template>
    <div class="article-card">
        <div class="article-image">
            <a :href="article.link" target="_blank">
                <img :src="article.image" :alt="article.title" />
            </a>
        </div>
        <div class="article-info">
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    article: {
        title: string;
        description: string;
        image: string;
        link: string;
    }
}>()

</script>

<style scoped>
.article-card {
    display: flex;
    align-items: center;
    width: 100%;
    height: 10em;
    border-radius: var(--card-border-radius);
    /* box-shadow: var(--card-box-shadow) */
    background: var(--card-bg);
}

.article-card:hover .article-image img {
    scale: 1.1;
}

.article-card .article-image {
    width: 40%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--card-border-radius);
}

.article-card img {
    height: 100%;
    width: 100%;
    border-radius: var(--card-border-radius);
    object-position: center;
    object-fit: cover;
    transition: .3s ease-in-out;
}

.article-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
}

.article-info h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
}

.article-info p {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.article-info a {
    margin: 0;
    font-size: 1rem;
    text-decoration: none;
    color: #007bff;
}

.article-info a:hover {
    text-decoration: underline;
}
</style>