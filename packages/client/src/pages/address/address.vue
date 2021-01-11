<template>
    <myHeader title="地址管理" />
    <div :class="$style.form">
        <div :class="$style.section">
            <input
                type="text"
                v-model="address.username"
                placeholder="请输入姓名"
            />
        </div>
        <div :class="$style.section">
            <input
                type="text"
                v-model="address.phone"
                placeholder="请输入电话号码"
            />
        </div>
        <!-- ui components-->
        <!--        <mini-address-->
        <!--            :itemHeight="height"-->
        <!--            :class="$style.address"-->
        <!--            @getValues="getValues"-->
        <!--            color="#666"-->
        <!--        ></mini-address>-->
        <div :class="$style.section">
            <input
                type="text"
                v-model="address.address"
                placeholder="请输入详细地址"
            />
        </div>
        <button @click.stop="saveAddress">保存</button>
    </div>
</template>
<script lang="ts" src="./address.ts"></script>
<style lang="scss" module>
@import "../../assets/css/layout.scss";

.form {
    padding-top: 96px;
    padding-left: 20px;

    .section {
        height: 60px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
        box-sizing: border-box;

        input {
            display: block;
            width: 98%;
            height: 40px;
            font-size: 28px;
            border: none;
        }
    }

    .address {
        font-size: 28px;
    }

    button {
        width: 96%;
        height: 80px;
        font-size: 28px;
        background: #f7f7f7;
        border: 1px solid #ddd;
        border-radius: 10px;
        margin-top: 20px;
    }
}
</style>
