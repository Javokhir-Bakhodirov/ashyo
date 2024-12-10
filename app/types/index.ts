export interface CategoriesT {
    id: number;
    createdAt: string;
    lastUpdateAt: string;
    name: string;
}

export interface ProductT {
    id: number;
    brand_id: number;
    createdAt: string;
    images: string[];
    lastUpdateAt: string;
    name: string;
    price: string;
    rate: null;
}
