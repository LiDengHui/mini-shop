import { Product } from "/@/api/types";

export interface ProductCart {
    product: Product;
    count: number;
    status: boolean;
}

export interface State {
    cart: ProductCart[];
    selectAll: boolean;
}
