import { fetchAPI } from "../lib/api";
import { Bank } from "../types";

export const getAllBank = async(): Promise<Bank[]> => {
    try {
        return await fetchAPI<Bank[]>("/banks", { timeout: 5000 });
    } catch (error) {
        console.error("Failed to fetch banks:", error);
        return [];
    }
}
