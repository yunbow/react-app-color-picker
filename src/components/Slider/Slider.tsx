import React from 'react';
import styles from './Slider.module.css';

interface SliderProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  color?: 'red' | 'green' | 'blue';
}

export const Slider: React.FC<SliderProps> = ({
  label,
  value,
  min = 0,
  max = 255,
  onChange,
  color
}) => {
  const sliderClassName = [
    styles.slider,
    color ? styles[color] : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}:</label>
      <input
        type="range"
        className={sliderClassName}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className={styles.value}>{value}</span>
    </div>
  );
};