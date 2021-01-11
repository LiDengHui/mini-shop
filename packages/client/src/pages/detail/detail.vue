<template>
    <myHeader title="商品详情" />

    <div :class="$style.detail">
        <Suspense>
            <template #default>
                <detail-main></detail-main>
            </template>
            <template #fallback> 加载中...</template>
        </Suspense>
    </div>
    <myFooter />
</template>
<script lang="ts" src="./detail.ts"></script>
<style lang="scss" module>
@import "../../assets/css/layout.scss";

.detail {
    @include flex;
    justify-content: center;
    align-items: center;
    padding-top: 86px;
    text-align: center;
    background: #f9f9f9;
    margin-bottom: 90px;
}
</style>
