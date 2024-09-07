<template>
  <dialog class="dialog" ref="dialog">
    <div class="dialog-head">
      <span>{{ name }}</span>
      <button class="dialog-close-btn" @click="close">
        <Icon name="fa6-solid:xmark" size="1.5em"/>
      </button>
    </div>
    <div class="dialog-content">
      <slot></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
defineProps<{
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
.dialog {
  border: none;
  border-radius: 10px;
  padding: 1em;
}

.dialog-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}

.dialog-close-btn {
  border: none;
  background: none;
  /* font-size: 1.5em; */
  cursor: pointer;
}

.dialog-content {
  width: 100%;
}
</style>