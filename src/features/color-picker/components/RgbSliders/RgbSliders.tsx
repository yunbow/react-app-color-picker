import React from 'react';
import { Slider } from '../../../../components/Slider';
import { RGBColor } from '../../types';
import styles from './RgbSliders.module.css';

interface RgbSlidersProps {
  rgb: RGBColor;
  onChange: (rgb: RGBColor) => void;
}

export const RgbSliders: React.FC<RgbSlidersProps> = ({ rgb, onChange }) => {
  const handleRedChange = (r: number) => {
    onChange({ ...rgb, r });
  };

  const handleGreenChange = (g: number) => {
    onChange({ ...rgb, g });
  };

  const handleBlueChange = (b: number) => {
    onChange({ ...rgb, b });
  };

  return (
    <div className={styles.sliders}>
      <Slider
        label="赤 (R)"
        value={rgb.r}
        onChange={handleRedChange}
        color="red"
      />
      <Slider
        label="緑 (G)"
        value={rgb.g}
        onChange={handleGreenChange}
        color="green"
      />
      <Slider
        label="青 (B)"
        value={rgb.b}
        onChange={handleBlueChange}
        color="blue"
      />
    </div>
  );
};