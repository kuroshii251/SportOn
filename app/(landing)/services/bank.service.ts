import { fetchAPI } from "@/app/lib/api";
import { Bank } from "@/app/types";

export const getAllBank = async(): Promise<Bank[]> => {
    return  await fetchAPI<Bank[]>("/banks");
}