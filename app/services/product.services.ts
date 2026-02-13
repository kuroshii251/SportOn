import { fetchAPI } from "@/app/lib/api";
import { Product } from "@/app/types";

export const getAllProducts = async(): Promise<Product[]> =>  {
return await fetchAPI<Product[]>("/products");
}

export const getProductDetail = async(id: string): Promise<Product> => {
    return await fetchAPI<Product>( `/products/${id}`);
}