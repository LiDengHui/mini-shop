import { defineComponent, reactive } from "vue";
export default defineComponent(function myFooter() {
    const list = reactive([
        {
            url: "/",
            class: "home",
            title: "主题",
        },
        {
            url: "/category",
            class: "category",
            title: "分类",
        },
        {
            url: "/cart",
            class: "cart",
            title: "购物车",
        },
        {
            url: "personal",
            class: "personal",
            title: "我的",
        },
    ]);

    return {
        list,
    };
});
