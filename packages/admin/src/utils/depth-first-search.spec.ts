import { depthFirstSearch } from "./depth-first-search";

describe("depth first traversal", () => {
    it("should be depth children in array", () => {
        const arr = [
            {
                key: 2,
                children: [
                    {
                        key: 3,
                        children: [],
                    },
                ],
            },
        ];
        const path: string[] = [];
        depthFirstSearch(arr, "key", "children", (node, paths, parent) => {
            path.push(String(node.key));
            expect(paths).toStrictEqual(path);
        });
    });
});
