export type Image = {
    id: number;
    url: string;
};

export type Product = {
    id: string;
    image: Image;
    name: string;
    price: number;
    stock: number;
};

export type ProductDetail = Product & {
    product_images: Image[];
};
export type Category = {
    id: number;
    image: Image[];
    name: string;
    products: Product[];
};
