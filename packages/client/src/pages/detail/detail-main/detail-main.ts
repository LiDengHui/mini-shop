import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";

import detailCart from "../detail-cart/detail-cart.vue";
import detailCore from "../detail-core/detail-core.vue";
import detailSection from "../detail-section/detail-section.vue";
import { getProductDetail } from "/@/api/product";
import { isString } from "/@/utils/is";
import { sleep } from "/@/utils";

export default defineComponent({
    components: {
        detailCart,
        detailSection,
        detailCore,
    },
    async setup() {
        const route = useRoute();

        const id = route.params.id;
        if (!isString(id)) {
            throw new Error(`route params id must be a string.`);
        }
        const res = await getProductDetail({
            id,
        });
        await sleep(100);
        const product = reactive(res.products);
        const addCart = (count: number) => {
            console.log(count);
        };
        return {
            product,
            addCart,
        };
    },
});
