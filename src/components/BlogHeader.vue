<script setup lang="ts">
const menu_links = [
    {
        name: '友链',
        icon: 'fa6-solid:link',
        link: '/links'
    },
    {
        name: '关于',
        icon: 'fa6-solid:address-card',
        link: '/about'
    }
]

const menu_dialog = ref<any>(null)
</script>

<template>
    <nav id="navbar">
        <a id="site-name">cxl2020mc`s Blog</a>
        <div id="blog-menu-buttons">
            <button class="blog-menu-button">
                <icon name="fa6-brands:github" class="blog-menu-icon"></icon>
            </button>
            <button class="blog-menu-button" id="blog-menu-buttom" @click="menu_dialog?.open()">
                <icon name="fa6-solid:bars" class="blog-menu-icon"></icon>
            </button>
        </div>
    </nav>
    <dialog-html name="菜单" id="menu-dialog" ref="menu_dialog">
        <div id="blog-menu">
            <a v-for="link in menu_links" :key="link.name" :href="link.link">
                <icon v-if="link.icon" :name="link.icon" class="blog-menu-icon"></icon>
                <span>{{ link.name }}</span>
            </a>
        </div>
    </dialog-html>
</template>

<style scoped>
#navbar {
    position: sticky;
    top: 0;
    left: 0;
    /* width: 100%; */
    z-index: 1000;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8);

    display: flex;
    margin: 0 auto;
    padding: 0 1em;
    justify-content: space-between;
    align-items: center;
}

#navbar a {
    align-items: center;
    color: #333;
    text-decoration: none;
}

#site-name {
    height: 3rem;
    align-items: center;
    display: flex;
    font-size: 1.4em;
    font-weight: bold;
    color: #333;
}

#blog-menu-buttons {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

.blog-menu-button {
    display: flex;
    align-items: center;
    padding: 0.5em;
    font-size: 1.5rem;
    background: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.blog-menu-button:hover {
    background-color: rgba(0, 0, 0, 0.1)
}

#blog-menu {
    display: flex;
    justify-self: center;
    gap: 0.5em;
}

#blog-menu a {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none
}

#blog-menu .blog-menu-icon {
    margin-right: 0.5em;
}
</style>