import { useState, useCallback } from 'react';
import { ColorState, RGBColor } from './types';
import { rgbToHex, hexToRgb, rgbToString } from './colorUtils';

export const useColorPicker = (initialColor = '#000000') => {
  const initialRgb = hexToRgb(initialColor);
  
  const [colorState, setColorState] = useState<ColorState>({
    rgb: initialRgb,
    hex: initialColor
  });

  const updateColor = useCallback((rgb: RGBColor) => {
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    setColorState({ rgb, hex });
  }, []);

  const setColorFromHex = useCallback((hex: string) => {
    const rgb = hexToRgb(hex);
    setColorState({ rgb, hex });
  }, []);

  const getRgbString = useCallback(() => {
    return rgbToString(colorState.rgb);
  }, [colorState.rgb]);

  return {
    colorState,
    updateColor,
    setColorFromHex,
    getRgbString
  };
};