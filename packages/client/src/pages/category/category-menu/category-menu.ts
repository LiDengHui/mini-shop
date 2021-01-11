import { defineComponent, onMounted, reactive } from "vue";
import panel from "/@/components/panel/panel.vue";
import { getCategoryAll } from "/@/api/category";
import { Category } from "/@/api/types";

export default defineComponent({
    components: {
        panel,
    },
    setup() {
        type CategoryState = {
            list: Category[];
            active?: Category;
        };
        const state = reactive<CategoryState>({
            list: [],
        });

        onMounted(async () => {
            const res = await getCategoryAll();
            if (res.categories) {
                state.list = res.categories;
                if (state.list.length > 0) {
                    state.active = state.list[0];
                }
            }
            return {};
        });

        const setActive = (category: Category) => {
            state.active = category;
        };

        return {
            state,
            setActive,
        };
    },
});
