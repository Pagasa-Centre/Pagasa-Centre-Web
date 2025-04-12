// utils/api.ts

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;

export function apiUrl(path: string) {
    return `${baseUrl}/${apiVersion}${path}`;
}