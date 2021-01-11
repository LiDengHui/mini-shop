<template>
    <panel title="主题精选">
        <div :class="$style.theme">
            <div v-for="item in list" :key="item.id" :class="[$style.themeItem, $style[item.className]]">
                <router-link :to="{name: 'Theme', params: {id: item.id}}">
                    <img :src="item.img" alt="">
                </router-link>
            </div>
        </div>
    </panel>
</template>
<script lang="ts" src="./theme-panel.ts">
</script>
<style lang="scss" module>
@import "../../../../assets/css/layout.scss";

.theme {
    @include flex(row);
    justify-content: space-between;

    .theme-item {
        height: 375px;
        border-bottom: 4px solid #fff;
        box-sizing: border-box;

        img {
            display: block;
            height: 100%;
        }

        &.big img {
            width: 100%;
        }
    }
}
</style>