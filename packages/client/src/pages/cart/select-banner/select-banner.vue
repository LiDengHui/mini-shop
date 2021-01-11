<template>
    <div :class="$style.countBanner">
        <div @click.stop="selectAll" :class="$style.selectAll">
            <img
                :src="
                    selectAllStatus
                        ? `/@/assets/images/icon/all@selected.png`
                        : `/@/assets/images/icon/all.png`
                "
                :class="$style.selected"
                alt="select all status"
            />

            <span>全选({{ totalNum }})</span>
        </div>
        <span :class="$style.toBuy">下单</span>
        <i>|</i>
        <span>￥{{ totalPrice }}</span>
        <img src="../../../assets/images/icon/arrow.png" alt="icon" />
    </div>
</template>
<script lang="ts" src="./select-banner.ts"></script>
<style lang="scss" module>
@import "../../../assets/css/layout.scss";
.count-Banner {
    @include flex(row);
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    font-size: 28px;
    position: fixed;
    bottom: 90px;
    background-color: #ab956d;
    color: #fff;

    .select-all {
        @include flex(row);
        align-items: center;
    }

    .selected {
        width: 48px;
        height: 48px;
        margin: 0 10px;
    }

    .to-buy {
        width: 220px;
        text-align: right;
        margin-right: 50px;
    }
}
</style>
