import { computed, defineComponent } from "vue";

import myHeader from "/@/components/public/header.vue";
import myFooter from "/@/components/public/footer/footer.vue";
import { useStore } from "/@/store/user";
import { useRouter } from "vue-router";

export default defineComponent({
    components: {
        myHeader,
        myFooter,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        return {
            address: computed(() => store.state.address),
            async goToAddress() {
                await router.push({ name: "Address" });
            },
        };
    },
});
