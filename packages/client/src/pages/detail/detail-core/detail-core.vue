<template>
    <div :class="$style.container">
        <div :class="$style.img">
            <img
                :src="`/static/images/${detail.image.url}`"
                alt="ProductImage"
            />
        </div>
        <div :class="$style.btnPanel">
            <div :class="$style.picker">
                <span>数量</span>
                <span>1</span>
                <span>
                    <img
                        :src="`/@/assets/images/icon/arrow@down.png`"
                        alt="picker"
                    />
                </span>
            </div>
            <div :class="$style.split"></div>
            <div :class="$style.addCart" @click="addCart">
                <span>加入购物车</span>
                <span>
                    <img
                        :src="`/@/assets/images/icon/cart.png`"
                        alt="addCart"
                    />
                </span>
            </div>
        </div>
        <div :class="$style.stock">
            <span v-if="detail.stock">有货</span>
            <span v-else>无货</span>
        </div>
        <div :class="$style.name">{{ detail.name }}</div>
        <div :class="$style.price">{{ detail.price }}</div>
    </div>
</template>
<script lang="ts" src="./detail-core.ts"></script>
<style lang="scss" module>
@import "../../../assets/css/layout.scss";

.container {
    width: 100vw;
    background: #fff;
    padding-bottom: 20px;
    margin-bottom: 20px;
    padding-top: 80px;
    .btnPanel {
        @include flex($direction: row);

        background: #ab956d;
        width: 660px;
        color: #fff;
        height: 100px;
        line-height: 100px;
        font-size: 28px;
        margin: 60px auto;
        border-radius: 50px;
        align-items: center;

        .picker {
            @include flex($direction: row);
            width: 50%;
            justify-content: space-around;

            img {
                width: 50px;
                vertical-align: middle;
            }
        }

        .split {
            width: 1px;
            height: 50px;
            border: 1px dotted #fff;
            display: inline-block;
        }

        .addCart {
            @include flex($direction: row);
            justify-content: space-around;
            width: 49%;
            height: 100px;
            line-height: 100px;

            img {
                line-height: 100px;
                vertical-align: text-bottom;
            }
        }
    }

    .stock {
        margin-top: 20px;
        font-size: 24px;
    }

    .name {
        margin-top: 20px;
        font-size: 40px;
    }
    .price {
        margin-top: 20px;
        font-size: 38px;
    }
}
</style>
