<template>
    <aside class="aside">
        <BlogAsideAuthor class="aside-item" :author="author" />
        <div class="aside-item">
            <h3 class="aside-title">热门文章</h3>
            <ul class="aside-list">
                <li class="aside-list-item">
                    <a href="#">文章标题1</a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
const author = {
    name: '陈鑫磊',
    avatar: 'https://public.img.cxl2020mc.top/avatar.png',
    description: '。。。',
    socials: []
}
</script>

<style scoped>
.aside {

}

.aside-item {
    margin: 1em;
    padding: 1em;
    background: var(--card-bg);
    border: var(--card-border);
    border-radius: var(--card-border-radius)
}

.aside-item:hover {
    border: var(--card-border-hover);
}

.aside-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}

.aside-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.aside-list-item {
    margin-bottom: 10px;
}

.aside-list-item a {
    color: #333;
    text-decoration: none;
}

.aside-list-item a:hover {
    color: #ff6600;
}
</style>