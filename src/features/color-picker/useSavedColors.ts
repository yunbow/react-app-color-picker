import { useState, useEffect, useCallback } from 'react';
import { getSavedColors, saveColor as saveColorToStorage, removeColor as removeColorFromStorage } from './storageUtils';

export const useSavedColors = () => {
  const [savedColors, setSavedColors] = useState<string[]>([]);

  useEffect(() => {
    setSavedColors(getSavedColors());
  }, []);

  const saveColor = useCallback((color: string) => {
    const newColors = saveColorToStorage(color);
    setSavedColors(newColors);
  }, []);

  const removeColor = useCallback((color: string) => {
    const newColors = removeColorFromStorage(color);
    setSavedColors(newColors);
  }, []);

  return {
    savedColors,
    saveColor,
    removeColor
  };
};