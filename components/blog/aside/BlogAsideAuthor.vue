<template>
    <div class="aside-author">
        <img class="aside-author__avatar" :src="author.avatar" alt="avatar">
        <div class="aside-author__info">
            <div class="aside-author__info-status">
                <Icon class="online" name="fa6-solid:circle" />
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

<style lang="css" scoped>
.aside-author {
    display: flex;
    flex-direction: column;
    align-content: center;
}

.aside-author__avatar {
    width: 30%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    align-self: center;
}

.online {
    color: #00ff00;
}
</style>
