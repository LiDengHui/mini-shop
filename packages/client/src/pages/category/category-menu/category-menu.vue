<template>
    <div :class="$style.container">
        <aside :class="$style.aside">
            <div v-show="false">{{ state.list }}</div>
            <ul>
                <li
                    v-for="item in state.list"
                    :key="item.id"
                    :class="{ [$style.active]: item.id === state.active.id }"
                    @click="setActive(item)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </aside>
        <div :class="$style.content" v-if="state.active">
            <div :class="$style[`header-img`]">
                <img :src="`/static/images/${state.active.image.url}`" alt="" />
            </div>
            <panel :title="`—— ${state.active.name} ——`">
                <div v-show="false">{{ state.active.products }}</div>
                <div :class="$style.list">
                    <div
                        v-for="item in state.active.products"
                        :key="item.name"
                        :class="$style.item"
                    >
                        <router-link
                            :to="{ name: 'Detail', params: { id: item.id } }"
                        >
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
        </div>
    </div>
</template>
<script lang="ts" src="./category-menu.ts"></script>
<style lang="scss" module>
@import "../../../assets/css/layout.scss";

.container {
    @include flex();
    margin-top: 86px;
    margin-bottom: 180px;

    .aside {
        position: fixed;
        top: 86px;
        left: 0;
        bottom: 90px;
        width: 150px;
        border-right: 1px solid #d8d8d8;
        background: #fff;

        li {
            height: 50px;
            padding: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            border-left: 6px solid #fff;

            &.active {
                color: #ab956d;
                border-left: 6px solid #ab956d;
            }
        }
    }

    .content {
        margin-left: 150px;
        flex: 1;
        padding: 30px;

        .header-img {
            margin: 0 auto;

            img {
                width: 100%;
                display: block;
            }
        }
    }
}

.list {
    @include flex($direction: row);
    justify-content: flex-start;

    .item {
        text-align: center;
        width: 33.33%;
        margin-bottom: 20px;
        margin-right: 0;
        border-radius: 10px;

        .img {
            margin: 0 auto;
            height: 120px;
            width: 120px;
            border-radius: 120px;
        }

        .title {
            color: #444452;
            font-size: 24px;
            margin-bottom: 6px;
        }

        .price {
            font-size: 24px;
            margin-bottom: 6px;
        }
    }
}
</style>
