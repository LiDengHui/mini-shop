import { defineComponent } from "vue";

import myHeader from "/@/components/public/header.vue";
import myFooter from "/@/components/public/footer/footer.vue";

import detailMain from "./detail-main/detail-main.vue";

export default defineComponent({
    components: {
        myHeader,
        myFooter,
        detailMain,
    },
});
