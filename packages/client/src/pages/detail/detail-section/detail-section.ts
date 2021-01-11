import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
    setup() {
        const active = ref(0);

        const tabs = reactive([
            {
                id: 0,
                name: "商品详情",
            },
            {
                id: 1,
                name: "产品参数",
            },
            {
                id: 2,
                name: "售后保障",
            },
        ]);

        const setActive = (n: number) => {
            active.value = n;
        };
        return {
            tabs,
            active,
            setActive,
        };
    },
});
