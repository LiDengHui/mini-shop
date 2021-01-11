import { defineComponent } from "vue";
import myHeader from "/@/components/public/header.vue";
import myFooter from "/@/components/public/footer/footer.vue";

import CartMain from "./cart-main/cart-main.vue";
import SelectBanner from "./select-banner/select-banner.vue";

export default defineComponent({
    components: {
        myHeader,
        myFooter,
        CartMain,
        SelectBanner,
    },

    setup() {},
});
