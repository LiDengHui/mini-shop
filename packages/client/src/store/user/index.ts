import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { State } from "./types";

export const userKey: InjectionKey<Store<State>> = Symbol();

export const userStore = createStore<State>({
    state: {
        address: {
            username: "测试用户",
            phone: "18888888888",
            address: "测试地址",
            detailAddress: "用户地址",
        },
    },
    actions,
    mutations,
    getters,
});

export function useStore() {
    return baseUseStore(userKey);
}
