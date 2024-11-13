import { DtoProduct } from '@/repository';
import { ProductServices } from '@/service';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useHomeModel = () => {
  const [productList, setProductList] = useState<DtoProduct[]>([]);
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const getProductList = async (payload : {name?: string}) => {
    try {
      setLoading(true)
      const response = await ProductServices.getProductList(payload);
      setProductList(response.data);
      if(payload.name) {
        router.push(`/?name=${payload.name}`)
      }else {
        router.push(`/`)
      }
      
    } catch (error) {
      toast.error('Failed to fetch product list' + String(error))
    } finally {
      setLoading(false)
    }
  }

  const handleProductSearch = () => {
    getProductList({name: search})
  }
  
  useEffect(() => {
    getProductList({})
  }, [])

  return {productList, handleProductSearch, setSearch, loading}
  
}

export default useHomeModel