import React from 'react';
import { Text } from '../../../components/Text';
import { ColorDisplay } from '../components/ColorDisplay';
import { RgbSliders } from '../components/RgbSliders';
import { PresetColors } from '../components/PresetColors';
import { SavedColors } from '../components/SavedColors';
import { useColorPicker } from '../useColorPicker';
import { useSavedColors } from '../useSavedColors';
import styles from './ColorPicker.module.css';

export const ColorPicker: React.FC = () => {
  const { colorState, updateColor, setColorFromHex, getRgbString } = useColorPicker();
  const { savedColors, saveColor, removeColor } = useSavedColors();

  const handleSaveCurrentColor = () => {
    saveColor(colorState.hex);
  };

  return (
    <div className={styles.container}>
      <Text variant="heading">カラーピッカー</Text>
      
      <ColorDisplay 
        rgbColor={getRgbString()}
        hexValue={colorState.hex}
      />
      
      <RgbSliders 
        rgb={colorState.rgb}
        onChange={updateColor}
      />
      
      <PresetColors onColorSelect={setColorFromHex} />
      
      <SavedColors
        colors={savedColors}
        currentColor={colorState.hex}
        onColorSelect={setColorFromHex}
        onColorSave={handleSaveCurrentColor}
        onColorRemove={removeColor}
      />
    </div>
  );
};