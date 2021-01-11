import { defineComponent } from "vue";

import myHeader from "/@/components/public/header.vue";
import myFooter from "/@/components/public/footer/footer.vue";
import themePanel from "./components/theme-panel/theme-panel.vue";
import homePanel from "./components/home-panel/home-panel.vue";
export default defineComponent({
    components: {
        myHeader,
        myFooter,
        themePanel,
        homePanel
    },
});
