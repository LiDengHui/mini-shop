import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { State } from "./types";
import { getCartList } from "/@/store/cart/storage";

export const cartKey: InjectionKey<Store<State>> = Symbol();

export const cartStore = createStore<State>({
    state: {
        cart: getCartList(),
        selectAll: true,
    },
    actions,
    mutations,
    getters,
});

export function useStore() {
    return baseUseStore(cartKey);
}
