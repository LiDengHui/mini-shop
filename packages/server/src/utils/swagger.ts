export const resSchema = (data: object) => {
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
                data,
            },
        },
    };
};

export const resListSchema = (model: string) => {
    return resSchema({
        type: "object",
        properties: {
            [model]: {
                type: "array",
                items: {
                    $ref: `#/definitions/${model}`,
                },
            },
        },
    });
};

export const resDetailSchema = (model: string) => {
    return resSchema({
        $ref: `#/definitions/${model}`,
    });
};
