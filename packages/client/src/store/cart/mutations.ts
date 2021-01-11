import {
    ADD_GOODS,
    DELETE_GOODS,
    MINUS,
    PLUS,
    SELECT_ALL,
    SELECT_CANCEL,
} from "/@/store/cart/constant";
import { State } from "/@/store/cart/types";
import { Product } from "/@/api/types";
import { saveCartList } from "/@/store/cart/storage";

export default {
    [PLUS]: (state: State, id: string) => {
        const cart = state.cart;

        const find = cart.find(({ product }) => {
            return product.id === id;
        });

        if (find) {
            find.count++;
            saveCartList(cart);
        }
    },

    [MINUS]: (state: State, id: string) => {
        const cart = state.cart;
        for (let i in cart) {
            if (cart[i].product.id === id) {
                cart[i].count -= 1;

                if (cart[i].count <= 0) {
                    cart.splice(Number(i), 1);
                }

                saveCartList(cart);
                return;
            }
        }
    },

    [ADD_GOODS]: (
        state: State,
        data: {
            product: Product;
            count: number;
            status?: boolean;
        }
    ) => {
        const cart = state.cart;

        const find = cart.find(({ product }) => {
            return product.id === data.product.id;
        });

        if (find) {
            find.count += data.count;
        } else {
            cart.push({
                ...data,
                status: true,
            });
        }

        saveCartList(cart);
    },

    [DELETE_GOODS]: (state: State, id: string) => {
        let cart = state.cart;
        for (let i in cart) {
            if (cart[i].product.id === id) {
                cart.splice(Number(i), 1);
            }
        }
        saveCartList(cart);
    },

    [SELECT_ALL]: (state: State) => {
        let cart = state.cart;
        if (state.selectAll) {
            cart.map((item) => {
                item.status = false;
            });
            state.selectAll = false;
        } else {
            cart.map((item) => {
                item.status = true;
            });
            state.selectAll = true;
        }
    },

    [SELECT_CANCEL]: (state: State, id: string) => {
        let cart = state.cart;
        let count = 0;

        cart.map((item) => {
            if (item.product.id === id) {
                item.status = !item.status;
            }
        });
        cart.map((item) => {
            if (item.status) {
                count += 1;
            }
        });
        state.selectAll = count === cart.length;
    },
};
