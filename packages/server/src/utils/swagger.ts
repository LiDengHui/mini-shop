export const resListSchema = (model: string) => {
    return {
        description: "ok",
        schema: {
            type: "object",
            properties: {
                code: {
                    type: "number",
                    default: 200,
                },
                message: {
                    type: "string",
                    default: "",
                },
                data: {
                    type: "object",
                    properties: {
                        [model]: {
                            type: "array",
                            items: {
                                $ref: `#/definitions/${model}`,
                            },
                        },
                    },
                },
            },
        },
    };
};

export const resDetailSchema = (model: string) => {
    return {
        description: "ok",
        schema: {
            type: "object",
            properties: {
                code: {
                    type: "number",
                    default: 200,
                },
                message: {
                    type: "string",
                    default: "",
                },
                data: {
                    $ref: `#/definitions/${model}`,
                },
            },
        },
    };
};
