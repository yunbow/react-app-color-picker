export const copyToClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('クリップボードへのコピーに失敗しました:', err);
      throw err;
    }
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      const success = document.execCommand('copy');
      if (!success) {
        throw new Error('document.execCommand failed');
      }
    } catch (err) {
      console.error('クリップボードへのコピーに失敗しました:', err);
      throw err;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};