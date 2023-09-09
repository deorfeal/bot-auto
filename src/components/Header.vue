<template>
    <header class="header">
        <a class="header__logo logo" href="#">
            <img class="logo__img" src="../../public/img/logo.svg" alt="logo">
        </a>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    position: absolute;
    padding-top: 40px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    z-index: 10;
}

.logo {
    &__img {}
}
</style>