import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames';
import type { Variant } from '@repository';
import { Button } from '@components';

interface Props {
    variants: Variant[];
    setSelectedVariant: React.Dispatch<React.SetStateAction<Variant>>;
    selectedVariant: Variant;
}

const Variants: React.FC<Props> = ({ variants, setSelectedVariant, selectedVariant }) => {
    return (
        <div className={styles.variants}>
            <h4>Select Variant:</h4>
            {variants.map((variant, index) => (
                <Button
                    key={index}
                    className={classNames(styles.variantButton, selectedVariant === variant ? styles.active : "")}
                    onClick={() => setSelectedVariant(variant)}
                    label={`${variant.size} - ${variant.color}`}
                />   
            ))}
        </div>
    )
}

export default Variants