import { Product } from "../type";

export class DtoProduct {
    id;
    name;
    description;
    price;
    images;
    variants;
    inStock;
    ratings;
    reviewsCount;
    shippingOptions;

    constructor(data: Product) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.images = data.images;
        this.variants = data.variants;
        this.inStock = data.inStock;
        this.ratings = data.ratings;
        this.reviewsCount = data.reviewsCount;
        this.shippingOptions = data.shippingOptions;
    }
}
export const createDtoProductDetail = (data: Product) => new DtoProduct(data);


export const createDtoProductList = (dataArray: Product[]) => {
    return dataArray.map((data) => new DtoProduct(data));
};