import { useDebounce } from '@/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'

const useHomeModel = () => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const pathName = usePathname()
  const debounceValue = useDebounce(search, 100);
  const searchParams = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if(debounceValue) {
      params.set('query', debounceValue)
    }else {
      params.delete('query')
    }
    router.replace(`${pathName}?${params.toString()}`)
  }, [debounceValue])
  

  return {setSearch}
  
}

export default useHomeModel