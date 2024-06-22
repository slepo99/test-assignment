<script setup lang="ts">

</script>
<template>
    <div class="container">
        <div class="wrapper">
            <div class="wrapper-content">
                <h1 class="wrapper-content__title">
                Test assignment for front-end developer
                </h1>
                <p class="wrapper-content__description">
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <Button width="100px" title="Sing up" class="wrapper-content__btn"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrapper {
background-image: url("../../assets/images/main/header-background.jpeg");
background-size: cover;
height: 634px;
display: flex;
align-items: center;
justify-content: center;
&-content {
    max-width: 380px;
    width: 100%;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
        font-size: 40px;
        line-height: 40px;
    }
    &__description {
        margin-top: 22px;
        font-size: 16px;
        line-height: 24px;
    }
    &__btn {
        margin-top: 32px;
    }
}
}
</style>