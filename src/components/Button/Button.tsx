import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  fullWidth = false,
  disabled = false
}) => {
  const className = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : ''
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={className} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};