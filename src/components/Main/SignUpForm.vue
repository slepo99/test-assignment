<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()
onMounted(() => {
  authStore.loadPositionsList()
})
</script>
<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">Working with POST request</h1>
      <form class="form">
        <div class="form-inputs">
          <input class="form-input" type="text" placeholder="Your name" />
          <input class="form-input" type="text" placeholder="Email" />
          <input class="form-input" type="text" placeholder="Phone" />
        </div>
        <div class="form-checkboxes">
          <span>Select your position</span>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title {
    text-align: center;
  }

  .form {
    max-width: 380px;
    width: 100%;
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .form-input {
    height: 54px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgb(208, 207, 207);
    background-color: $primary;
    padding: 14px 16px;
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
