import { computed, defineComponent } from "vue";
import { useStore } from "/@/store/cart";
import { SELECT_ALL } from "/@/store/cart/constant";

export default defineComponent({
    setup() {
        const store = useStore();
        return {
            totalNum: computed(() => store.getters.totalNum),
            totalPrice: computed(() => store.getters.totalPrice),
            selectAllStatus: computed(() => store.getters.selectAllStatus),
            selectAll: (id: string) => store.dispatch(SELECT_ALL, id),
        };
    },
});
