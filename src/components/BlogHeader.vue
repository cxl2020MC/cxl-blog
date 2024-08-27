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
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8)
}

#nav {
    display: flex;
    /* height: 3em; */
    margin: 0 auto;
    padding: 0 1em;
    justify-content: space-between;
    align-items: center;
}


#blog-menu-info {
    display: flex;
    height: 3em;
    align-items: center;
}

#blog-menu-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
}

#blog-menu-links {
    display: flex;
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
</style>