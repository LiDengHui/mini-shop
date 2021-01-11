import { State } from "/@/store/cart/types";

export default {
    totalNum(state: State) {
        let cart = state.cart;
        let totalNum = 0;
        for (let i in cart) {
            if (cart[i].status) {
                totalNum += cart[i].count;
            }
        }
        return totalNum;
    },
    totalPrice(state: State) {
        let cart = state.cart;
        let base = 1000;
        let totalPrice = 0.0;
        for (let i in cart) {
            if (cart[i].status) {
                totalPrice += cart[i].count * cart[i].product.price * base;
            }
        }
        return totalPrice / base;
    },

    selectAllStatus(state: State) {
        return state.selectAll;
    },
};
