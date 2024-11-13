import React from 'react'
import styles from './styles.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input: React.FC<Props> = ({label, ...props}) => {
  return (
    <div className={styles.inputContainer}>
        <label>{label}</label>
        <input className={styles.input} {...props} />
    </div>
  )
}

export default Input