<template>
    <myHeader title="我的" />
    <div :class="$style.personal">
        <div :class="$style.header">
            <div :class="$style.headerImg">
                <img
                    :src="`/@/assets/images/icon/user@default.png`"
                    alt="user"
                />
                <span>零食商贩</span>
            </div>
            <div :class="$style.about">
                <img :src="`/@/assets/images/icon/about.png`" alt="about" />
                <span>关于我们</span>
            </div>
        </div>
        <div :class="$style.address">
            <dl>
                <dt @click.stop="goToAddress">
                    <span>地址管理</span>
                    <img :src="`/@/assets/images/icon/arrow@right.png`" alt />
                </dt>
                <dd>{{ address.username }}</dd>
                <dd>{{ address.phone }}</dd>
                <dd>
                    {{ address.detailAddress }}
                </dd>
            </dl>
        </div>
    </div>
    <myFooter />
</template>
<script lang="ts" src="./personal.ts"></script>
<style lang="scss" module>
@import "../../assets/css/layout.scss";

.personal {
    height: calc(100vh - 90px);
    @include flex;
    margin-top: 86px;
    margin-bottom: 180px;

    .header {
        @include flex(row);
        justify-content: space-between;
        align-items: center;
        background-color: #ab956d;
        color: #fff;
        padding: 30px;
        font-size: 28px;

        & > div {
            @include flex(row);
            align-items: center;
        }

        .header-img {
            img {
                height: 100px;
                width: 100px;
                border-radius: 50%;
            }

            span {
                margin-left: 20px;
            }
        }

        .about {
            img {
                width: 48px;
                height: 48px;
            }
        }
    }

    .address {
        font-size: 28px;
        text-align: left;
        color: #c7c7c7;
        background: #fff;

        dt {
            position: relative;
            text-align: center;

            img {
                position: absolute;
                top: 14px;
                right: 20px;
                width: 50px;
                height: 50px;
                transform: rotate(-90deg);
            }
        }

        dt,
        dd {
            padding: 20px 30px 20px 20px;
            border-bottom: 1px solid #e9e9e9;
        }
    }
}
</style>
