import { computed, defineComponent } from "vue";
import { useStore } from "/@/store/cart";

export default defineComponent({
    setup() {
        const cartStore = useStore();
        return {
            totalNum: computed(() => cartStore.getters.totalNum),
        };
    },
});
