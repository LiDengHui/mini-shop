import { defineComponent, reactive } from "vue";
import myHeader from "/@/components/public/header.vue";
import { useStore } from "/@/store/user";
import { SAVE_ADDRESS } from "/@/store/user/constant";
import { useRouter } from "vue-router";

export default defineComponent({
    components: {
        myHeader,
    },

    setup() {
        const userStore = useStore();
        const router = useRouter();
        const address = reactive(userStore.state.address);
        return {
            address,
            async saveAddress() {
                await userStore.dispatch(SAVE_ADDRESS, address);

                await router.push({
                    name: "Personal",
                });
            },
        };
    },
});
