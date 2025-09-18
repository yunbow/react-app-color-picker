import React from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'hexValue' | 'body';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body',
  as
}) => {
  const className = [
    styles.text,
    variant !== 'body' ? styles[variant] : ''
  ].filter(Boolean).join(' ');

  if (as) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  switch (variant) {
    case 'heading':
      return <h1 className={className}>{children}</h1>;
    case 'subheading':
      return <h3 className={className}>{children}</h3>;
    case 'hexValue':
      return <span className={className}>{children}</span>;
    default:
      return <span className={className}>{children}</span>;
  }
};