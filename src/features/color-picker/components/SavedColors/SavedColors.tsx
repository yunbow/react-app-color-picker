import React from 'react';
import { Text } from '../../../../components/Text';
import { Button } from '../../../../components/Button';
import { ColorGrid } from '../ColorGrid';
import styles from './SavedColors.module.css';

interface SavedColorsProps {
  colors: string[];
  currentColor: string;
  onColorSelect: (color: string) => void;
  onColorSave: () => void;
  onColorRemove: (color: string) => void;
}

export const SavedColors: React.FC<SavedColorsProps> = ({
  colors,
  onColorSelect,
  onColorSave,
  onColorRemove
}) => {
  return (
    <div className={styles.savedColors}>
      <Text variant="subheading">保存されたカラー</Text>
      <ColorGrid 
        colors={colors}
        onColorClick={onColorSelect}
        onColorRightClick={onColorRemove}
      />
      <Button 
        variant="secondary" 
        fullWidth 
        onClick={onColorSave}
      >
        現在の色を保存
      </Button>
    </div>
  );
};