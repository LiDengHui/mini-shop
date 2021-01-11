import { get, post } from "./utils";
import { Product, ProductDetail } from "./types";

export const getProduct = (): Promise<{ products: Product[] }> =>
    get("product");

export const getProductDetail = (data: {
    id: string;
}): Promise<{ products: ProductDetail }> => get(`product/${data.id}`);
