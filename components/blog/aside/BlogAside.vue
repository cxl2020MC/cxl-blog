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