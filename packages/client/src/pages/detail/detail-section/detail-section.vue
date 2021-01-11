<template>
    <div :class="$style.section">
        <div :class="$style.tabs">
            <ul>
                <li
                    v-for="item in tabs"
                    :key="item.id"
                    :class="{
                        [$style.active]: item.id === active,
                    }"
                    @click="setActive(item.id)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div :class="$style.content">
            <div v-show="active === 0" :class="$style.images"></div>
            <div v-show="active === 1" :class="$style.desc">
                <div>
                    <span :class="$style.title">品名</span>
                    <span>贵妃笑</span>
                </div>
                <div>
                    <span :class="$style.title">口味</span>
                    <span>酸、甜、苦、辣</span>
                </div>
                <div>
                    <span :class="$style.title">产地</span>
                    <span>上海市</span>
                </div>
                <div>
                    <span :class="$style.title">保质期</span>
                    <span>180天</span>
                </div>
            </div>
            <div v-show="active === 2" :class="$style.protect">
                <p>七天无理由免费退货</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./detail-section.ts"></script>
<style lang="scss" module>
@import "../../../assets/css/layout.scss";

.section {
    width: 100%;
    background: #fff;

    .tabs {
        ul {
            @include flex(row);
            height: 90px;
            line-height: 90px;
            color: #c7c7cb;
            font-size: 28px;
            border-bottom: 1px solid #d0d0d7;

            li {
                height: 90px;
                flex: 1;

                &.active {
                    color: #ab956d;
                    border-bottom: 1px solid #ab956d;
                }
            }
        }
    }

    .content {
        padding: 20px;
        font-size: 24px;

        .desc {
            @include flex;
            align-items: flex-start;

            .title {
                width: 100px;
                display: inline-block;
                text-align: center;
                padding-left: 40px;
                color: #808080;
            }

            span {
                padding-left: 60px;
                color: #333;
            }

            & > div {
                margin-bottom: 10px;
            }
        }

        .protect {
        }
    }
}
</style>
