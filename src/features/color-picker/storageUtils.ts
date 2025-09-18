const STORAGE_KEY = 'savedColors';
const MAX_SAVED_COLORS = 10;

export const getSavedColors = (): string[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('保存された色の読み込みに失敗しました:', error);
    return [];
  }
};

export const saveColor = (color: string): string[] => {
  try {
    const savedColors = getSavedColors();
    
    if (!savedColors.includes(color)) {
      const newColors = [...savedColors, color];
      if (newColors.length > MAX_SAVED_COLORS) {
        newColors.shift();
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newColors));
      return newColors;
    }
    
    return savedColors;
  } catch (error) {
    console.error('色の保存に失敗しました:', error);
    return getSavedColors();
  }
};

export const removeColor = (colorToRemove: string): string[] => {
  try {
    const savedColors = getSavedColors();
    const filteredColors = savedColors.filter(color => color !== colorToRemove);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredColors));
    return filteredColors;
  } catch (error) {
    console.error('色の削除に失敗しました:', error);
    return getSavedColors();
  }
};