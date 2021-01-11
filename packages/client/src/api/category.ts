import { get } from "./utils";
import { Category } from "./types";

export const getCategoryAll = (): Promise<{
    categories: Category[];
}> => get("/category");
