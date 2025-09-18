import React from 'react';
import { Text } from '../../../../components/Text';
import { ColorGrid } from '../ColorGrid';
import styles from './PresetColors.module.css';

interface PresetColorsProps {
  onColorSelect: (color: string) => void;
}

const PRESET_COLORS = [
  '#ff0000',
  '#00ff00', 
  '#0000ff',
  '#ffff00',
  '#00ffff',
  '#ff00ff',
  '#ffffff',
  '#000000'
];

export const PresetColors: React.FC<PresetColorsProps> = ({ onColorSelect }) => {
  return (
    <div className={styles.presetColors}>
      <Text variant="subheading">プリセットカラー</Text>
      <ColorGrid 
        colors={PRESET_COLORS}
        onColorClick={onColorSelect}
      />
    </div>
  );
};