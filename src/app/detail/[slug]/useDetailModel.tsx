"use client"
import React, { useEffect, useState } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './styles.module.scss'
import { useProductDetail } from '@adapters';
import { Variant } from '@repository';
import { useParams } from 'next/navigation';

const useDetailModel = () => {
    const params = useParams();
    const { product, loading, getProductList } = useProductDetail(params.slug as string);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [selectedVariant, setSelectedVariant] = useState<Variant>({} as Variant);

    useEffect(() => {
        getProductList()
    }, [])


    useEffect(() => {
        if (product) {
            setSelectedImage(product?.images[0]);
            setSelectedVariant(product?.variants[0]);
        }
    }, [product])


    const renderStars = () => {
        const stars = [];
        if(!product) return;
        for (let i = 1; i <= 5; i++) {
            if (i <= product.ratings) {
                stars.push(<FaStar key={i} className={styles.star} />);
            } else if (i - product.ratings < 1) {
                stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
            } else {
                stars.push(<FaRegStar key={i} className={styles.star} />);
            }
        }
        return stars;
    };
    return { selectedImage, setSelectedImage, selectedVariant, setSelectedVariant, renderStars, product, loading }
}

export default useDetailModel