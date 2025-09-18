import React from 'react';
import styles from './ColorBox.module.css';

interface ColorBoxProps {
  color: string;
  onClick?: () => void;
  onRightClick?: () => void;
}

export const ColorBox: React.FC<ColorBoxProps> = ({ 
  color, 
  onClick,
  onRightClick
}) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    if (onRightClick) {
      e.preventDefault();
      onRightClick();
    }
  };

  return (
    <div
      className={styles.colorBox}
      style={{ backgroundColor: color }}
      onClick={onClick}
      onContextMenu={handleContextMenu}
    />
  );
};