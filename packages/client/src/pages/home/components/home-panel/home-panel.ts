import { defineComponent, onMounted, ref } from "vue";
import Panel from "/@/components/panel/panel.vue";
import { getProduct } from "/@/api/product";
import { Product } from "/@/api/types";

export default defineComponent({
    components: {
        Panel,
    },
    setup() {
        let products = ref<Product[]>([]);
        onMounted(async () => {
            const res = await getProduct();
            products.value = res.products;
            return {};
        });
        return {
            products,
        };
    },
});
