import { SAVE_ADDRESS } from "./constant";
import { ActionContext } from "vuex";
import { Address, State } from "./types";

export default {
    [SAVE_ADDRESS]: (
        { commit }: ActionContext<State, State>,
        data: Address
    ) => {
        commit(SAVE_ADDRESS, data);
    },
};
