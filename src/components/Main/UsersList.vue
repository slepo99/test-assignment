<script setup lang="ts">
import { onMounted } from 'vue'
import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
onMounted(() => {
  usersStore.loadUsersList()
})
</script>
<template>
  <div class="container section">
    <div class="wrapper">
      <h1 class="wrapper__title">Working with GET request</h1>
      <div class="wrapper-users">
        <div
          v-for="(user, index) in usersStore.usersList"
          :key="index"
          class="wrapper-users__cards"
        >
          <Avatar :avatarUrl="user.photo" />
          <span class="user-name"> {{ user.name }}</span>
          <div class="user-info">
            <span>{{ user.position }}</span>
            <span>{{ user.email }}</span>
            <span>{{ user.phone }}</span>
          </div>
        </div>
      </div>
      <Button
        v-if="usersStore.pageLinks.nextUrl"
        @click="usersStore.loadUsersList()"
        title="Show more"
        width="120"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section {
  margin-top: 140px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  &__title {
    text-align: center;
  }

  &-users {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 29px;
    width: 100%;
    &__cards {
      height: 254px;
      max-width: 370px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 16px;
      padding: 20px;
      text-align: center;
      gap: 20px;
      .user-info {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        span {
          text-overflow: ellipsis;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
