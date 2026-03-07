import { fetchAPI } from "../lib/api";
import { Transaction } from "../types";


export const transactionCheckout = async(form: FormData): Promise<Transaction> => {
    return await fetchAPI<Transaction>("/transactions/checkout", {
        method: "POST",
        body: form,
        timeout: 30000,
    });
};

export const getTransactionById = async(id: string): Promise<Transaction> => {
    return await fetchAPI<Transaction>(`/transactions/${id}`, { timeout: 10000 });
}
