<script setup lang="ts">
const Config = useAppConfig()
const colorMode = useColorMode()

function toggleColorMode() {
    if (colorMode.preference == 'system') {
        colorMode.preference = 'light'
    } else if (colorMode.preference == 'light') {
        colorMode.preference = 'dark'
    } else if (colorMode.preference == 'dark') {
        colorMode.preference = 'system'
    }
    console.log(colorMode.value)
}

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
    },
    {
        name: '归档',
        icon: '',
        link: '/archives'
    },
    {
        name: '分类',
        icon: 'fa6-solid:folder-open',
        sublinks: [
            {
                name: '前端',
                link: '/categories/前端'
            },
            {
                name: '后端',
                link: '/categories/后端'
            },
            {
                name: '其他',
                link: '/categories/其他'
            }
        ]
    },
]


const menu_dialog = ref<any | null>(null)
</script>

<template>
    <nav id="navbar">
        <NuxtLink id="site-name" to="/">{{ site_name }}</NuxtLink>

        <div id="menu-items">
            <template v-for="link in menu_links" :key="link.name">
                <a class="menu-item" v-if="link.link" :href="link.link">
                    <icon v-if="link.icon" :name="link.icon" class="menu-icon"></icon>
                    <span>{{ link.name }}</span>
                </a>
                <div class="menu-item-group" v-else>
                    <icon v-if="link.icon" :name="link.icon" class="menu-icon"></icon>
                    <span>{{ link.name }}</span>
                    <div class="menu-item-group-items">
                        <a v-for="sublink in link.sublinks" :key="sublink.name" :href="sublink.link">{{ sublink.name }}</a>
                    </div>
                </div>
            </template>
        </div>
        <div id="menu-buttons">
            <button class="menu-button">
                <icon name="fa6-brands:github" class="menu-icon"></icon>
            </button>
            <button class="menu-button" @click="toggleColorMode">
                <icon v-if="colorMode.preference == 'system'" name="fa6-solid:circle-half-stroke" class="menu-icon"></icon>
                <icon v-else-if="colorMode.preference == 'light'" name="fa6-solid:sun" class="menu-icon"></icon>
                <icon v-else-if="colorMode.preference == 'dark'" name="fa6-solid:moon" class="menu-icon"></icon>
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
    background-color: var(--blur-bg);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

#navbar a {
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
}

#site-name {
    margin: 0.5em;
    align-items: center;
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
    color: var(--text-color);
}


#menu-items {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    gap: 0.5em;
}

@media (max-width: 40em) {
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
    border-radius: 0.5em;
    cursor: pointer;
    gap: 0.5em;
    transition: background 0.3s ease-in-out;
}

.menu-item:hover {
    background: rgba(0, 0, 0, 0.1)
}

.menu-item-group {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

.menu-item-group:hover {
    background: none;
}

.menu-item-group:hover .menu-item {
    background: rgba(0, 0, 0, 0.1)
}

.menu-item-group-items {
    display: none;
}

#menu-buttons {
    display: flex;
    align-items: center;
    gap: 0.1em;
}

.menu-button {
    display: flex;
    align-items: center;
    padding: 0.5em;
    font-size: 1em;
    background: none;
    border: none;
    border-radius: 10px;
    color: var(--text-color);
    cursor: pointer;
    transition: background 0.3s ease-in-out;
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
</style>
