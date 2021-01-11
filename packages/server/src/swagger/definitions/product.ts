export default {
    type: "object",
    properties: {
        id: {
            type: "integer",
        },
        name: {
            type: "string",
        },
        price: {
            type: "number",
            format: "float",
        },
        stock: {
            type: "integer",
        },
        category_id: {
            type: "integer",
        },
        main_img_url: {
            type: "string",
        },
    },
};
