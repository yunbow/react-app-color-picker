import React from 'react';
import styles from './ColorPreview.module.css';

interface ColorPreviewProps {
  color: string;
}

export const ColorPreview: React.FC<ColorPreviewProps> = ({ color }) => {
  return (
    <div 
      className={styles.colorPreview}
      style={{ backgroundColor: color }}
    />
  );
};