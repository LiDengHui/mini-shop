import { defineComponent } from "vue";

import myHeader from "/@/components/public/header.vue";
import myFooter from "/@/components/public/footer/footer.vue";
import categoryMenu from "./category-menu/category-menu.vue";
export default defineComponent({
    components: {
        myHeader,
        myFooter,
        categoryMenu
    },
});
