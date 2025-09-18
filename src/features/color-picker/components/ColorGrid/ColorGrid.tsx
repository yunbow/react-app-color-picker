import React from 'react';
import { ColorBox } from '../../../../components/ColorBox';
import styles from './ColorGrid.module.css';

interface ColorGridProps {
  colors: string[];
  onColorClick: (color: string) => void;
  onColorRightClick?: (color: string) => void;
}

export const ColorGrid: React.FC<ColorGridProps> = ({ 
  colors, 
  onColorClick,
  onColorRightClick
}) => {
  return (
    <div className={styles.colorGrid}>
      {colors.map((color, index) => (
        <ColorBox
          key={`${color}-${index}`}
          color={color}
          onClick={() => onColorClick(color)}
          onRightClick={onColorRightClick ? () => onColorRightClick(color) : undefined}
        />
      ))}
    </div>
  );
};