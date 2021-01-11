import product from "./product";
import definitions from "./definitions";
export default {
    swagger: "2.0",
    info: {
        description: "This is a Simple Restful API",
        version: "1.0.0",
        title: "Mini Shop",
    },

    host: "localhost:8000",
    basePath: "/",
    tags: [
        {
            name: "product",
            description: "商品",
        },
    ],
    paths: {
        ...product,
    },
    definitions,
};
