<template>
    <div :class="$style.panel">
        <p :class="$style.title">{{ title }}</p>
        <slot></slot>
    </div>
</template>
<script lang="ts" src="./panel.ts"></script>
<style lang="scss" module>
@import "../../assets/css/layout.scss";

.panel {
    @include panel;
}
</style>