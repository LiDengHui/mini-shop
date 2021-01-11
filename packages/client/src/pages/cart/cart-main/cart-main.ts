import { computed, defineComponent } from "vue";
import { useStore } from "/@/store/cart";
import {
    DELETE_GOODS,
    MINUS,
    PLUS,
    SELECT_CANCEL,
} from "/@/store/cart/constant";

export default defineComponent({
    setup() {
        const store = useStore();
        return {
            list: computed(() => store.state.cart),
            selectCancel: (id: string) => store.dispatch(SELECT_CANCEL, id),
            plus: (id: string) => store.dispatch(PLUS, id),
            minus: (id: string) => store.dispatch(MINUS, id),
            deleteGoods: (id: string) => store.dispatch(DELETE_GOODS, id),
        };
    },
});
