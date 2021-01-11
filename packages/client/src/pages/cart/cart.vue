<template>
    <myHeader title="购物车" />
    <div :class="$style.cart">
        <cart-main></cart-main>
    </div>
    <select-banner></select-banner>
    <myFooter />
</template>
<script lang="ts" src="./cart.ts">
export default {};
</script>
<style lang="scss" module>
@import "../../assets/css/layout.scss";

.cart {
    @include flex;
    margin-top: 86px;
    margin-bottom: 180px;
}
</style>
