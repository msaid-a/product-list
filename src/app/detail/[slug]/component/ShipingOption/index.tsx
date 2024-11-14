import React from 'react'
import styles from './styles.module.scss'

interface Props {
    shippingOptions: {
        type: string;
        price: number;
        estimatedDelivery: string;
    }[]
}

const ShipingOption: React.FC<Props> = ({ shippingOptions }) => {
    return (
        <div className={styles.shipping}>
            <h4>Shipping Options:</h4>
            <ul>
                {shippingOptions.map((option, index) => (
                    <li key={index}>
                        <strong>{option.type}</strong>: ${option.price} - {option.estimatedDelivery}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShipingOption