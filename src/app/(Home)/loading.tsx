import React from 'react'
import styles from './styles.module.scss'
import ProductCardLoading from './component/ProductCardLoading'

const Loading = () => {
    return (
        <div className={styles.page}>
            <div className={styles.productGrid}>
                {Array(10).fill(null).map((_, index) => <ProductCardLoading key={index} />)}
            </div>
        </div>
    )
}

export default Loading