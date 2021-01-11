import {
    ADD_GOODS,
    DELETE_GOODS,
    MINUS,
    PLUS,
    SELECT_ALL,
    SELECT_CANCEL,
} from "./constant";
import { ActionContext, Store } from "vuex";
import { State } from "./types";
import { Product } from "/@/api/types";

export default {
    [PLUS]: ({ commit }: ActionContext<State, State>, id: string) => {
        commit(PLUS, id);
    },

    [MINUS]: ({ commit }: ActionContext<State, State>, id: string) => {
        commit(MINUS, id);
    },

    [ADD_GOODS]: (
        { commit }: ActionContext<State, State>,
        data: {
            product: Product;
            count: number;
            status?: boolean;
        }
    ) => {
        commit(ADD_GOODS, data);
    },

    [DELETE_GOODS]: ({ commit }: ActionContext<State, State>, id: string) => {
        commit(DELETE_GOODS, id);
    },

    [SELECT_ALL]: ({ commit }: ActionContext<State, State>) => {
        commit(SELECT_ALL);
    },

    [SELECT_CANCEL]: ({ commit }: ActionContext<State, State>, id: string) => {
        commit(SELECT_CANCEL, id);
    },
};
