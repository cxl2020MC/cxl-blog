<script setup lang="ts">
const Config = useAppConfig()

const site_name = Config.site_name

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


const menu_dialog = ref<any | null>(null)
</script>

<template>
    <nav id="navbar">
        <a id="site-name" href="/">{{ site_name }}</a>

        <div id="menu-items">
            <a class="menu-item" v-for="link in menu_links" :key="link.name" :href="link.link">
                <icon v-if="link.icon" :name="link.icon" class="menu-icon"></icon>
                <span>{{ link.name }}</span>
            </a>
        </div>
        <div id="menu-buttons">
            <button class="menu-button">
                <icon name="fa6-brands:github" class="menu-icon"></icon>
            </button>
            <button class="menu-button">
                <icon name="fa6-solid:circle-half-stroke" class="menu-icon"></icon>
            </button>
            <button class="menu-button" id="menu-buttom" @click="menu_dialog?.open()">
                <icon name="fa6-solid:bars" class="menu-icon"></icon>
            </button>
        </div>
    </nav>
    <BlogDialog name="菜单" id="menu-dialog" ref="menu_dialog">
        <div id="menu">
            <a v-for="link in menu_links" :key="link.name" :href="link.link">
                <icon v-if="link.icon" :name="link.icon" class="menu-icon"></icon>
                <span>{{ link.name }}</span>
            </a>
        </div>
    </BlogDialog>
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


#menu-items {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    gap: 0.5em;
}

@media (max-width: 600px) {
    #menu-items {
        display: none
    }
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 0.5em;
    background: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    gap: 0.5em;
    transition: background-color 0.3s ease-in-out;
}

.menu-item:hover {
    background-color: rgba(0, 0, 0, 0.1)
}

#menu-buttons {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

.menu-button {
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

.menu-button:hover {
    background-color: rgba(0, 0, 0, 0.1)
}

#menu {
    display: flex;
    justify-self: center;
    gap: 0.5em;
}

#menu a {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none
}

#menu .menu-icon {
    margin-right: 0.5em;
}
</style>
