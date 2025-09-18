import React, { useState } from 'react';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import { copyToClipboard } from '../../clipboardUtils';
import styles from './ColorValue.module.css';

interface ColorValueProps {
  hexValue: string;
}

export const ColorValue: React.FC<ColorValueProps> = ({ hexValue }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyToClipboard(hexValue);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      console.error('コピーに失敗しました:', error);
    }
  };

  return (
    <div className={styles.colorValue}>
      <Text variant="hexValue">{hexValue}</Text>
      <Button onClick={handleCopy}>
        {isCopied ? 'コピーしました！' : 'コピー'}
      </Button>
    </div>
  );
};