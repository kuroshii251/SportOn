export async function fetchAPI<T>(
    endpoint: string,
    options?: RequestInit & { timeout?: number }
): Promise<T> {
    const { timeout = 10000, ...fetchOptions } = options || {};
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
            ...fetchOptions,
            cache: fetchOptions?.cache || "no-store",
            signal: controller.signal,
        });

        if(!res.ok) {
            let errorMessage = `Failed to fetch data from ${endpoint}`;
            try {
                const errorData = await res.json();
                errorMessage = errorData.message || errorData.error || errorMessage;
            } catch(e) {
                console.log(e);
            }

            throw new Error(errorMessage);
        }
        return res.json();
    } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw new Error(`Request to ${endpoint} timed out after ${timeout}ms`);
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}


export function getImageUrl(path: string) {
    if(!path) return "/images/placeholder.png";
    if(path.startsWith("http")) return path;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}


export function getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
        Authorization: `Bearer ${token}`,
    };
}