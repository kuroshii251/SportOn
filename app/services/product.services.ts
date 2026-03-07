import { fetchAPI } from "../lib/api";
import { Product } from "../types";


export const getAllProducts = async(): Promise<Product[]> =>  {
    try {
        return await fetchAPI<Product[]>("/products", { timeout: 15000 });
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
}

export const getProductDetail = async(id: string): Promise<Product> => {
    try {
        return await fetchAPI<Product>(`/products/${id}`, { timeout: 10000 });
    } catch (error) {
        console.error(`Failed to fetch product ${id}:`, error);
        throw error;
    }
}

