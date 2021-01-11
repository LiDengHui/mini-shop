<template>
    <div v-for="item in list" :key="item.product.id" :class="$style.cartItem">
        <img
            :class="$style.check"
            :src="
                item.status
                    ? `/@/assets/images/icon/circle@selected.png`
                    : `/@/assets/images/icon/circle@noselected.png`
            "
            alt="selected"
            @click.stop="selectCancel(item.product.id)"
        />
        <div :class="$style.cartImg">
            <img
                :src="`static/images/${item.product.image.url}`"
                alt="picture"
            />
        </div>
        <div :class="$style.text">
            <div :class="$style.num">
                <span>{{ item.product.name }}</span>
                <div :class="$style.counter">
                    <span
                        :class="$style.minus"
                        @click.stop="minus(item.product.id)"
                        >-</span
                    >
                    <span :class="$style.number">{{ item.count }}</span>
                    <span
                        :class="$style.plus"
                        @click.stop="plus(item.product.id)"
                        >+</span
                    >
                </div>
            </div>
            <div :class="$style.money">
                <span>¥ {{ item.product.price }}</span>
                <span
                    :class="$style.x"
                    @click.stop="deleteGoods(item.product.id)"
                    >x</span
                >
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./cart-main.ts"></script>
<style lang="scss" module>
@import "../../../assets/css/layout.scss";

.cart-item {
    @include flex(row);
    height: 186px;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid #d0d0d7;

    .check {
        width: 40px;
        margin-left: 20px;
    }

    .cart-img {
        width: 186px;

        img {
            display: block;
            width: 100%;
        }
    }

    .text {
        flex: 1;
        height: 100%;
        font-size: 28px;
        @include flex(row);
        justify-content: space-between;
        color: #454553;

        .num {
            @include flex;
            justify-content: space-between;

            .counter {
                font-size: 28px;

                .number {
                    display: inline-block;
                    width: 100px;
                    text-align: center;
                }

                .minus {
                    font-size: 40px;
                }

                .plus {
                    font-size: 50px;
                }
            }
        }

        .money {
            @include flex;
            font-size: 36px;
            justify-content: space-between;
            align-items: flex-end;
            padding-right: 10px;

            .x {
                padding-bottom: 10px;
            }
        }
    }
}
</style>
