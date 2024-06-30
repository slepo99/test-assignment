<script setup lang="ts">
const props = defineProps<{
  title?: string
  width?: string
}>()
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
<template>
  <button @click="emit('click')" :style="{ width: props.width }" class="btn">
    {{ title }}
  </button>
</template>
<style lang="scss" scoped>
.btn {
  height: 34px;
  border-radius: 80px;
  border: none;
  background-color: rgb(244, 224, 65);
  transition: all 0.6s ease;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
}
.btn:hover {
  background-color: rgb(255, 227, 2);
}
</style>
