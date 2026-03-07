import { fetchAPI } from "../lib/api";
import { Category } from "../types";


export const getAllCategories = async(): Promise<Category[]> => {
    try {
        return await fetchAPI<Category[]>("/categories", { timeout: 10000 });
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        return [];
    }
}
