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
        <div id="blog-menu-items">
            <button class="blog-menu-item">
                <icon name="fa6-brands:github" class="blog-menu-icon"></icon>
            </button>
            <button class="blog-menu-item" id="blog-menu-buttom" @cilck="menu_dialog.open">
                <icon name="fa6-solid:bars" class="blog-menu-icon"></icon>
            </button>
        </div>
    </nav>
    <!-- <div id="blog-menu">
            <a v-for="link in menu_links" :key="link.name" :href="link.link">
                <icon v-if="link.icon" :name="link.icon" class="blog-menu-icon"></icon>
                <span>{{ link.name }}</span>
            </a>
    </div> -->
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
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
}

#blog-menu-items {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    gap: 0.5em;
}

.blog-menu-item {
    display: flex;
    align-items: center;
    padding: 0.5em;
}

#blog-menu-buttom {
    display: flex;
    align-items: center;
    gap: 0.5em;
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