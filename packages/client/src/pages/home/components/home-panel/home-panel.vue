<template>
    <panel title="最近新品">
        <div v-show="false">{{ products }}</div>
        <div :class="$style.list">
            <div v-for="item in products" :key="item.name" :class="$style.item">
                <router-link :to="{ name: 'Detail', params: { id: item.id } }">
                    <img
                        :class="$style.img"
                        :src="`/static/images${item.image.url}`"
                        :alt="item.title"
                    />
                    <p :class="$style.title">{{ item.name }}</p>
                    <p :class="$style.price">{{ item.price }}</p>
                </router-link>
            </div>
        </div>
    </panel>
</template>
<script lang="ts" src="./home-panel.ts" />
<style lang="scss" module>
@import "../../../../assets/css/layout.scss";

.list {
    @include flex($direction: row);
    margin: 0 20px 90px 20px;
    justify-content: space-between;

    .item {
        background-color: #f5f5f5;
        text-align: center;
        width: 49%;
        margin-bottom: 10px;
        margin-right: 0;
        border-radius: 10px;

        .img {
            margin: 0 auto;
            width: 80%;
            height: 220px;
            border-radius: 10px;
        }

        .title {
            font-size: 28px;
            margin-bottom: 6px;
        }

        .price {
            font-size: 24px;
            margin-bottom: 6px;
        }
    }
}
</style>
