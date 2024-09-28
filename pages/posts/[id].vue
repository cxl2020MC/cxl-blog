<script lang="ts" setup>
import { renderMarkdown } from @utils/renderMarkdown

const { params } = useRoute()
const config = useRuntimeConfig()
const api_url = config.public.apiBase

const { data } = await useFetch(`${api_url}/posts/${params.id}`)
const post = data.value

</script>

<template>
    
</template>

<style scoped>
.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
main {
    flex: 1 1 40em;
}

.aside {
    flex: 1 1 10em;
}
    
@media (min-width: 50em) {
    main {
        max-width: 75em;
    }
    .aside {
        max-width: 20em;
    }
}
</style>