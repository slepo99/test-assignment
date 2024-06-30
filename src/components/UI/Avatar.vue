<script setup lang="ts">
defineProps<{
  avatarUrl: string
}>()
</script>
<template>
  <img :src="avatarUrl" class="avatar-img" />
</template>

<style lang="scss" scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  width: 70px;
  height: 70px;
}
</style>
