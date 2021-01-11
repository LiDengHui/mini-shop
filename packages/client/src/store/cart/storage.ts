import { ProductCart } from "/@/store/cart/types";

export const CART_LIST = "CART_LIST";

export function saveData(type: typeof CART_LIST, data: any) {
    window.localStorage.setItem(type, JSON.stringify(data));
}

export function saveCartList(data: ProductCart[]) {
    saveData(CART_LIST, data);
}

export function getCartList(): ProductCart[] {
    const defaultCartString = window.localStorage.getItem(CART_LIST);

    return defaultCartString ? JSON.parse(defaultCartString) : [];
}
