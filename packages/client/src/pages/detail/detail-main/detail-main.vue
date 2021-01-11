<template>
    <detail-cart></detail-cart>
    <detail-core :detail="product" @addCart="addCart"></detail-core>
    <detail-section></detail-section>
</template>
<script lang="ts" src="./detail-main.ts"></script>
<style lang="scss" module></style>
