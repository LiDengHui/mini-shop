import { translateArrayToObject } from "./translate-array-to-object";

describe("translate array to object by key", () => {
    it("should be translate single layer array<object> to object by key", () => {
        const arr = [
            {
                key: "test",
            },
            {
                key: "test2",
            },
        ];
        const obj = {
            test: {
                key: "test",
            },
            test2: {
                key: "test2",
            },
        };
        expect(translateArrayToObject(arr, "key")).toStrictEqual(obj);
    });

    it("should be translate multilayer array<object> to object by key", () => {
        const arr = [
            {
                key: "test",
                children: [
                    {
                        key: "test",
                    },
                    {
                        key: "test2",
                    },
                ],
            },
        ];
        const obj = {
            test: {
                key: "test",
                children: {
                    test: {
                        key: "test",
                    },
                    test2: {
                        key: "test2",
                    },
                },
            },
        };
        expect(translateArrayToObject(arr, "key", "children")).toStrictEqual(
            obj,
        );
    });
});
