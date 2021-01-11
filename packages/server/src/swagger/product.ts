import { resListSchema, resDetailSchema } from "../utils/swagger";
import product from "./definitions/product";
export default {
    "/product": {
        get: {
            tags: ["product"],
            summary: "获取产品列表",
            responses: {
                "200": resListSchema("product"),
            },
        },
    },

    "/product/detail": {
        get: {
            tags: ["product"],
            summary: "获取产品详情",
            parameters: {},
            responses: {
                "200": resDetailSchema("product"),
            },
        },
    },
};
