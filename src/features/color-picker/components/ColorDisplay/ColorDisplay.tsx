import React from 'react';
import { ColorPreview } from '../../../../components/ColorPreview';
import { ColorValue } from '../ColorValue';
import styles from './ColorDisplay.module.css';

interface ColorDisplayProps {
  rgbColor: string;
  hexValue: string;
}

export const ColorDisplay: React.FC<ColorDisplayProps> = ({ 
  rgbColor, 
  hexValue 
}) => {
  return (
    <div className={styles.colorDisplay}>
      <ColorPreview color={rgbColor} />
      <ColorValue hexValue={hexValue} />
    </div>
  );
};