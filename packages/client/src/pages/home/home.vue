<template>
    <my-header title="零食商贩"></my-header>
    <div :class="$style.home">
        <theme-panel/>
        <home-panel/>
    </div>
    <my-footer></my-footer>
</template>

<script lang="ts" src="./home.ts">
</script>
<style lang="scss" module>
@import "../../assets/css/layout.scss";

.home {
    @include flex;
    margin-top: 86px;
    margin-bottom: 180px;
}
</style>