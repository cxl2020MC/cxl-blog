<template>
    <div class="aside">
        <BlogAsideAuthor :author="author" />
        <div class="aside-item">
            <h3 class="aside-title">热门文章</h3>
            <ul class="aside-list">
                <li class="aside-list-item">
                    <a href="#">文章标题1</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const author = {
    name: '陈鑫磊',
    avatar: 'https://cdn.jsdelivr.net/gh/itclanCoder/blog_img_store@main/img/20210722143447.2g3x6xq8z3o0.jpg',
    description: '。。。',
    socials: []
}
</script>

<style scoped>
.aside {
    padding: 1em;
}

.aside-item {
    margin-top: 20px;
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