import { cloneDeep, isArray } from "lodash/fp";

export const translateArrayToObject = <T extends Record<string, any>>(
    arr: T[],
    keyName: keyof T,
    childName?: keyof T,
) => {
    return arr.reduce((obj: Record<string, any>, e) => {
        const keyValue = (e[keyName] as unknown) as string;
        const node = cloneDeep(e);
        if (childName) {
            const children = node[childName];
            if (children && isArray(children)) {
                node[childName] = translateArrayToObject(
                    children,
                    keyName,
                    childName,
                ) as any;
            }
        }
        obj[keyValue] = node;
        return obj;
    }, {});
};
