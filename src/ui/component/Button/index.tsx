
import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, ...props }) => (
  <button
    className={`${styles.button} ${disabled ? styles.disabled : ''}`}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {label}
  </button>
);

export default Button;
