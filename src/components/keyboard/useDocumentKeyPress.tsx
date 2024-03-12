import { useEffect } from 'react';
import { keyboardLayouts } from './keyboardLayouts'; // Import your keyboard layouts

interface KeyPressedCallback {
  (key: string): void;
}

const printLog = (event: KeyboardEvent, transformedKey: string | undefined, key: string | undefined) => {
  console.log('event:', event);
  console.log('event.code:', event.code);
  console.log('event.key:', event.key);
  console.log('key pressed:', key);
  console.log('transformedKey pressed:', transformedKey);
};

const isKorean = (text: string) => {
  const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return koreanCheck.test(text);
};

const documentKeyPressed = (event: KeyboardEvent, callback: KeyPressedCallback) => {
  let key: string | undefined;
  let transformedKey: string | undefined;
  let index: number | undefined;

  if (event.code.startsWith('Digit')) { // Use char as it is when 123#Ç[] event.code = DI.
    transformedKey = event.key;
  } else if (event.code.startsWith('Key')) { // Use korean as it is
    if (isKorean(event.key)) {
      transformedKey = event.key;
    } else if (event.key.length === 1) { // others, use code as index and use shiftkey pressed event
      const a = event.code.substring(3);
      key = a === 'Y' ? 'Z' : a === 'Z' ? 'Y' : a;
      index = keyboardLayouts.germanShifted.indexOf(key);
      if (event.shiftKey) {
        transformedKey = keyboardLayouts.koreanShifted[index];
      } else {
        transformedKey = keyboardLayouts.korean[index];
      }
    }
  }
  if (transformedKey && callback) {
    callback(transformedKey);
  }

  // printLog(event, transformedKey, key);
};

const useDocumentKeyPress = (callback: KeyPressedCallback) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      documentKeyPressed(event, callback);
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [callback]);
};

export default useDocumentKeyPress;
