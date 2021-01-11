import { SAVE_ADDRESS } from "/@/store/user/constant";
import { Address, State } from "/@/store/user/types";

export default {
    [SAVE_ADDRESS]: (state: State, data: Address) => {
        state.address = data;
    },
};
