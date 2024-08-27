<script setup lang="ts">
const menu_links = [
    {
        name: 'links',
        icon: 'fa6-solid:link',
        link: '/links'
    },
    {
        name: 'About',
        link: '/about'
    }
]

</script>

<template>
    <header id="blog-menu">
        <nav id="nav">
            <div id="blog-menu-info">
                <span id="blog-menu-title">cxl2020mc`s Blog</span>
            </div>
            <div id="blog-menu-links">
                <a v-for="link in menu_links" :key="link.name" :href="link.link">
                    <icon v-if="link.icon" :name="link.icon" class="blog-menu-icon"></icon>
                    <span>{{ link.name }}</span>
                </a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
#blog-menu {
    /* display: fixed; */
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8)
}

#nav {
    display: flex;
    height: 3em;
    margin: 0 auto;
    padding: 0 1em;
    justify-content: space-between;
    align-items: center;
}


#blog-menu-info {
    display: flex;
    /* justify-content: flex-start; */
    /* align-items: center; */
    /* height: 3em; */
}

#blog-menu-links {
    display: flex;
    /* justify-content: flex-end; */
    /* align-items: center; */
    gap: 0.5em;
}

#blog-menu-links a {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none
    
}

#blog-menu-links .blog-menu-icon {
    margin-right: 0.5em;
}

#blog-menu-title {
    font-size: 24px;
    font-weight: bold;
    color: #333
}
</style>