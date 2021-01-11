import {defineComponent, reactive} from "vue";
import Panel from '/@/components/panel/panel.vue';
import img1 from '/@/assets/images/test/1@theme.png';
import img2 from '/@/assets/images/test/2@theme.png';
import img3 from '/@/assets/images/test/3@theme.png';

export default defineComponent({
    components: {
        Panel,
    },
    setup() {
        const list = reactive([
            {
                id: 1,
                img: img1,
            },
            {
                id: 2,
                img: img2,
            },
            {
                id: 3,
                img: img3,
                className: 'big'
            }
        ])
        return {
            list
        };
    },
});
