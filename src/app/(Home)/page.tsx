import Link from 'next/link';
import ProductCard from './component/ProductCard';
import { SectionSearch } from './organism';
import styles from './styles.module.scss'
import { ProductServices } from '@/service';

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const { query: name } = await searchParams;
  const response = await ProductServices.getProductList({name})
  return (
    <div className={styles.page}>
      <h2>Product List</h2>
      <SectionSearch />
      <div className={styles.productGrid}>
        {response.data.map((product) => (
          <Link href={`/detail/${product.id}`} key={product.id}>
            <ProductCard key={product.id} image={product.images[0]} rating={product.ratings} {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
