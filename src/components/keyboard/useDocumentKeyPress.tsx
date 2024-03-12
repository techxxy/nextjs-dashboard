import { useEffect } from 'react';
import { keyboardLayouts } from './keyboardLayouts'; // Import your keyboard layouts

interface KeyPressedCallback {
  (key: string): void;
}

const handleInput = (koreanKey: string) => {
  // Implement your logic to handle the Korean input
  console.log('Korean key pressed:', koreanKey);
};

const documentKeyPressed = (event: KeyboardEvent, callback: KeyPressedCallback) => {
  let key: string | undefined;
  let koreanKey: string | undefined;
  let index: number | undefined;

  if (event.code.startsWith('Key')) {
    const a = event.code.substring(3);
    key = a === 'Y' ? 'Z' : a === 'Z' ? 'Y' : a;
  } else if (event.code.startsWith('Digit')) {
    key = event.code.substring(5);
  } else if (event.key.length === 1) {
    koreanKey = event.key;
    handleInput(koreanKey);
  }

  if (key) {
    index = keyboardLayouts.germanShifted.indexOf(key);
    if (event.shiftKey) {
      koreanKey = keyboardLayouts.koreanShifted[index];
    } else {
      koreanKey = keyboardLayouts.korean[index];
    }
    handleInput(koreanKey);
  }

  // Call the callback function with the pressed key
  if (koreanKey && callback) {
    callback(koreanKey);
  }
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
