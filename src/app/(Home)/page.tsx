"use client"
import { Input } from '@/ui/component';
import ProductCard from './component/ProductCard';
import styles from './styles.module.scss'
import useHomeModel from './useHomeModel';
import ProductCardLoading from './component/ProductCardLoading';

export default function Home() {
  const { productList, handleProductSearch, setSearch, loading } = useHomeModel()
  return (
    <div className={styles.page}>
      <h2>Product List</h2>
      <Input label=''
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={
          (e) => {
            if (e.key === 'Enter') {
              handleProductSearch()
            }
          }}
        placeholder='Masukan Nama Produk'
      />
      <div className={styles.productGrid}>
        {loading 
          ? Array(10).fill(null).map((_, index) => <ProductCardLoading key={index} />) 
          : productList.map((product) => (
            <ProductCard key={product.id} image={product.images[0]} rating={product.ratings} {...product} />
        ))}
      </div>
    </div>
  );
}
