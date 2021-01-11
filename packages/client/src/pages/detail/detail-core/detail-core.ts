import { defineComponent, PropType, reactive } from "vue";
import { ProductDetail } from "/@/api/types";
import { useStore } from "/@/store/cart";
import { ADD_GOODS } from "/@/store/cart/constant";

export default defineComponent({
    props: {
        detail: {
            required: true,
            type: Object as PropType<ProductDetail>,
        },
    },
    setup(props) {
        const cartStore = useStore();
        const detail = reactive(props.detail);

        const addCart = async () => {
            await cartStore.dispatch(ADD_GOODS, {
                product: detail,
                count: 1,
                status: true,
            });
        };
        return {
            detail,
            addCart,
        };
    },
});
