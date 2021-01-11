<template>
    <div :class="$style.cart">
        <img :src="`/@/assets/images/icon/cart@top.png`" alt="cartTop" />
        <div :class="$style.num">{{ totalNum }}</div>
    </div>
</template>
<script lang="ts" src="./detail-cart.ts"></script>
<style lang="scss" module>
.cart {
    position: fixed;
    top: 120px;
    right: 30px;
    width: 64px;
    height: 64px;

    img {
    }

    .num {
        background: #ab9567;
        border-radius: 100%;
        color: #fff;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        top: -2px;
        left: -24px;
        font-size: 26px;
    }
}
</style>
