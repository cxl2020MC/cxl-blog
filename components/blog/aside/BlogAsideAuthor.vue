<template>
    <div class="aside-author">
        <img class="aside-author__avatar" :src="author.avatar" alt="avator">
        <div class="aside-author__info">
            <div class="aside-author__info-status">

                <span>在线</span>
            </div>
            <h4 class="aside-author__name">{{ author.name }}</h4>
            <p class="aside-author__desc">{{ author.description }}</p>
        </div>
        <div class="aside-author__status">
            <p class="aside-author__status-item">文章: 1145</p>
            <!-- <p class="aside-author__status-item">Comments: 20</p> -->
        </div>
        <div class="aside-author__socials">

        </div>
    </div>

</template>

<script setup lang="ts">
defineProps<{
    author: {
        name: string,
        avatar: string,
        description: string,
        socials: Array<{
            name: string,
            icon: string,
            url: string
        }>
    }
}>()

</script>