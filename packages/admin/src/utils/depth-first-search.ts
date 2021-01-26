import { isArray, isPlainObject } from "lodash/fp";

type NodeCallback<T extends Record<string, any>> = (
    node: T,
    paths: string[],
    parent: any,
) => {} | void;

/**
 * 深度优先便利数组，及数组子项，并返回一个默认只
 * @param arr
 * @param keyName
 * @param childrenName
 * @param fn
 */
export function depthFirstSearch<T extends object>(
    arr: T[],
    keyName: keyof T,
    childrenName: keyof T,
    fn: NodeCallback<T>,
) {
    const dfs = (
        arr: T[],
        parent: {
            paths?: string[];
        },
    ): any[] => {
        const paths = parent.paths || [];
        return arr.map((obj) => {
            const childrenPaths = [...paths, String(obj[keyName])];
            const node: Record<string, any> =
                fn(obj, childrenPaths, parent) || {};
            const children = obj[childrenName];
            let targetChildren = [];
            if (isArray(children)) {
                targetChildren = dfs(children, {
                    paths: childrenPaths,
                });
            }
            if (isPlainObject(node)) {
                node[childrenName as string] = targetChildren;
            }
            return node;
        });
    };
    return dfs(arr, {});
}
