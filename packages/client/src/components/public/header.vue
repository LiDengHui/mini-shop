<template>
    <header :class="$style.header">
        <span>{{ title }}</span>
    </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Header",
    props: {
        title: String,
    },
});
</script>
<style lang='scss' module>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 86px;
    line-height: 86px;
    font-size: 30px;
    text-align: center;
    background: #ab956d;
    z-index: 2;
    span {
        color: #fff;
    }
}
</style>