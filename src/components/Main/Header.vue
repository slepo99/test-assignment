<script setup lang="ts"></script>
<template>
  <header>
    <div class="container">
      <div class="wrapper">
        <img class="wrapper__logo" src="../../assets/images/main/Logo.svg" alt="" />
        <div class="wrapper__options">
          <Button width="100px" title="Users" />
          <Button width="100px" title="Sign up" />
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
  background-color: #fff;
  position: sticky;
  top: 0;
}
.wrapper {
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  &__logo {
    width: 104px;
  }
  &__options {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
