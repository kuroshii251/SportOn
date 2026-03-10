import { fetchAPI, getAuthHeaders } from "../lib/api";
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

export const createProduct = async(data: FormData): Promise<Product> => {
    return await fetchAPI<Product>("/products", {
        method: "POST",
        headers: {
...getAuthHeaders(),
        },
        body: data,
    });
}


export const updateProduct = async(id: string, data: FormData): Promise<Product> => {
    return await fetchAPI<Product>(`/products/${id}`, {
        method: "PUT",
        headers: {
            ...getAuthHeaders(),
        },
        body: data,
    });
}


export const deleteProduct = async(id: string): Promise<void> => {
    return await fetchAPI<void>(`/products/${id}`, {
        method: "DELETE",
        headers: {
            ...getAuthHeaders(),
        },
    });
}