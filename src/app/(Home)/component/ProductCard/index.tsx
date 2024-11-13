// components/ProductCard.tsx

import Image from 'next/image';
import styles from './styles.module.scss';
import {FaStar} from "react-icons/fa";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
  rating:number
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, image, inStock, rating }) => {
    
  return (
    <div key={id} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} width={300} height={300} className={styles.image} />
        {!inStock && <span className={styles.outOfStock}>Out of Stock</span>}
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description.substring(0, 20)}...</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <div className={styles.rating}><FaStar/>{rating}</div>
      </div>
    </div>
  );
};

export default ProductCard;
