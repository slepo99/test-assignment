<script setup lang="ts">
import defaultImage from '../../assets/images/main/user.svg'

defineProps<{
  avatarUrl: string
}>()
function handleError(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = defaultImage
}
</script>
<template>
  <img :src="avatarUrl" @error.once="handleError" class="avatar-img" />
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
