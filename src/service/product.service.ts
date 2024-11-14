import { createDtoProductDetail, createDtoProductList } from "@repository";
import { axios } from "@network";

class ProductService {
    async getProductList({ name }: { name?: string }) {
        const res = await axios.get('/products', {
            params: {
                name: name ? name : undefined
            }
        });
        return { data: createDtoProductList(res.data) };
    }

    async getProductDetail(id: string) {
        const res = await axios.get(`/products/${id}`);
        return { data: createDtoProductDetail(res.data) };
    }
}

export const ProductServices = new ProductService();
