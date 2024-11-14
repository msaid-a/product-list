import { DtoProduct } from '@/repository'
import { ProductServices } from '@/service'
import { useState } from 'react'
import toast from 'react-hot-toast'

const useProductDetail = (id: string) => {
    const [product, setProduct] = useState<DtoProduct | undefined>(undefined)
    const [loading, setLoading] = useState(true)

    const getProductList = async () => {
        try {
            setLoading(true)
            const response = await ProductServices.getProductDetail(id)
            setProduct(response.data)
        } catch (error) {
            toast.error('Failed to fetch product list' + error)
        } finally {
            setLoading(false)
        }
    }

    return { product, loading, getProductList }
}

export default useProductDetail