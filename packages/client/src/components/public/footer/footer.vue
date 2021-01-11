<template>
    <footer :class="$style.footer">
        <router-link
            :class="$style.item"
            :to="item.url"
            v-for="item in list"
            :key="item.url"
        >
            <span :class="$style[item.class]"></span>
            <p>{{ item.title }}</p>
        </router-link>
    </footer>
</template>
<script lang="ts" src="./footer.ts">
</script>
<style lang="scss" module>
@import "../../../assets/css/layout.scss";
.footer {
    @include flex($direction: row);
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 90px;
    background: #f5f5f5;
    align-items: center;

    .item {
        @include flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        span {
            display: inline-block;
            width: 40px;
            height: 40px;
        }

        .home {
            background: url("../../../assets/images/toolbar/home.png") no-repeat;
            background-size: 40px 40px;
        }

        .category {
            background: url("../../../assets/images/toolbar/category.png")
                no-repeat;
            background-size: 40px 40px;
        }
        .cart {
            background: url("../../../assets/images/toolbar/cart.png") no-repeat;
            background-size: 40px 40px;
        }
        .personal {
            background: url("../../../assets/images/toolbar/my.png") no-repeat;
            background-size: 40px 40px;
        }
        p {
            font-size: 24px;
            color: #989898;
        }
    }
}
</style>