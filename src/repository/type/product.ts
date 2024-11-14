export interface Variant {
    size: string;
    color: string;
}

interface ShippingOption {
    type: string;
    price: number;
    estimatedDelivery: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    variants: Variant[];
    inStock: boolean;
    ratings: number;
    reviewsCount: number;
    shippingOptions: ShippingOption[];
}