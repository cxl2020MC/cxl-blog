<template>
  <dialog class="dialog" ref="dialog">
    <div class="dialog-head">
      <span>{{ name }}</span>
      <button @click="close">X</button>
    </div>
    <div class="dialog-content">
      <slot></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
const dialog = ref<HTMLDialogElement|null>(null);

function open() {
  (dialog.value as HTMLDialogElement)?.showModal();
}

function close() {
  console.log('关闭弹窗');
  (dialog.value as HTMLDialogElement)?.close();
}

defineExpose({
  open,
  close,
});
</script>

<style scoped>

</style>