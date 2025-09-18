export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface ColorState {
  rgb: RGBColor;
  hex: string;
}

export interface SavedColorsState {
  colors: string[];
}

export interface ColorPickerProps {
  initialColor?: string;
  onColorChange?: (color: ColorState) => void;
}