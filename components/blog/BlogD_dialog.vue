<template>
    <div class="D-dialog-overlay" v-if="show" @click="$emit('close')"></div>
    <div :class="show ? 'D-dialog show' : 'D-dialog hide'">
            <div class="D-dialog-head">
                <span>{{ name }}</span>
                <button class="D-dialog-close-btn" @click="$emit('close')">
                    <icon name="fa6-solid:xmark" size="1.5em" />
                </button>
            </div>
            <div class="D-dialog-content">
                <slot></slot>
            </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    show: boolean;
}>();

defineEmits<{
    (e: 'close'): void;
}>();
</script>

<style scoped>
.D-dialog-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
}


.D-dialog {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 300px;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 1em;
    z-index: 9999;
    background-color: var(--bg-color);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
}

.D-dialog.show{
    transform: translateX(0);
    /* transition: transform 0.3s ease-in-out; */
}

.D-dialog.hide{
    transform: translateX(100%);
    /* transition: transform 0.3s ease-in-out; */
}

.D-dialog-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
}

.D-dialog-close-btn {
    border: none;
    background: none;
    /* font-size: 1.5em; */
    cursor: pointer;
}

.D-dialog-content {
    width: 100%;
}
</style>