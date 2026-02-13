import { fetchAPI } from "@/app/lib/api";
import { Category } from "@/app/types";

export const getAllCategories = async(): Promise<Category[]> => {
    return  await fetchAPI<Category[]>("/categories");
}