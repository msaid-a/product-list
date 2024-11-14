"use client"
import Image from 'next/image';
import styles from './styles.module.scss';
import { Button } from '@components';
import { ShipingOption, Variants, Loading } from './component';
import useDetailModel from './useDetailModel';

const ProductDetail: React.FC = () => {
    const { 
        selectedImage,
        selectedVariant, 
        setSelectedImage, 
        setSelectedVariant, 
        renderStars, 
        product,
        loading
     } = useDetailModel();

     if(loading || !product) return <Loading />

    return (
        <div className={styles.productDetail}>
            <div className={styles.product}>
                <div className={styles.imageSection}>
                    <div className={styles.mainImage}>
                        {selectedImage && (
                            <Image src={selectedImage} alt={product.name} width={400} height={400} />
                        )}
                    </div>
                    <div className={styles.thumbnailImages}>
                        {product.images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                width={100}
                                height={100}
                                onClick={() => setSelectedImage(img)}
                                className={img === selectedImage ? styles.selected : ""}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.detailsSection}>
                    <h1 className={styles.name}>{product.name}</h1>
                    <div className={styles.ratings}>
                        {renderStars()}
                        <span>({product.reviewsCount} reviews)</span>
                    </div>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    <p className={styles.description}>{product.description}</p>

                    <Variants variants={product.variants} setSelectedVariant={setSelectedVariant} selectedVariant={selectedVariant} />
                    <ShipingOption shippingOptions={product.shippingOptions} />
                    <Button label={product.inStock ? "Add to Cart" : "Out of Stock"} disabled={!product.inStock} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
