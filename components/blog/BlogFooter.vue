<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">Copyright &copy; 2020. All rights reserved.</p>
                    <p class="text-cneter">构建时间: {{ BuildTime }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import moment from 'moment';
const BuildTime = moment(useRuntimeConfig().public.BuildTime).format("YYYY-MM-DD HH:mm:ss")
</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    background-color: var(--card-bg);
    padding: 1em;
}
</style>
