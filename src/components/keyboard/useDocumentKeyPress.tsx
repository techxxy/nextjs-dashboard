import { useEffect } from 'react';
import { keyboardLayouts } from './keyboardLayouts'; // Import your keyboard layouts

// Define a type for the callback function to be called when a key is pressed
interface KeyPressedCallback {
  (key: string): void;
}

// Utility function to print information about the key event
const printLog = (
  event: KeyboardEvent,
  convertedValue: string | undefined,
  key: string | undefined,
) => {
  console.log('event:', event);
  console.log('event.code:', event.code);
  console.log('event.key:', event.key);
  console.log('key pressed:', key);
  console.log('convertedValue pressed:', convertedValue);
};

// Check if a given text contains Korean characters
const isKorean = (text: string) => {
  const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return koreanCheck.test(text);
};

// Function to handle key press events on the document
const documentKeyPressed = (
  event: KeyboardEvent,
  callback: KeyPressedCallback,
) => {
  let key: string | undefined;
  let convertedValue: string | undefined;
  let index: number | undefined;

  if (event.key.length === 1) { // If single character like symbols #!
    if (event.code.startsWith('Digit')) { // if number keys
      convertedValue = event.key;
    } else if (event.code.startsWith('Key')) {
      // For other keys starting with 'Key'
      if (isKorean(event.key)) { // If it's a Korean character, use it as it is
        convertedValue = event.key;
      } else if (event.key.length === 1) {
        // For other single characters, handle shift key and keyboard layouts
        const a = event.code.substring(3);
        key = a === 'Y' ? 'Z' : a === 'Z' ? 'Y' : a;
        index = keyboardLayouts.germanShifted.indexOf(key);
        if (event.shiftKey) {
          convertedValue = keyboardLayouts.koreanShifted[index];
        } else {
          convertedValue = keyboardLayouts.korean[index];
        }
      }
    } else {
      convertedValue = event.key; // For other keys, use the key itself
    }
  } else if(event.key === 'Backspace') {
    convertedValue = 'Backpace';
  } else {
    console.log("special key inputed: ", event); // For special keys
  }

  // Call the callback function with the converted value if available
  if (convertedValue && callback) {
    callback(convertedValue);
  }
};

// Custom hook to handle key press events on the document
const useDocumentKeyPress = (callback: KeyPressedCallback) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      documentKeyPressed(event, callback);
    };

    // Add event listener for key press events on the document
    document.addEventListener('keydown', handleKeyPress); 

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [callback]); // Depend on the callback function
};

export default useDocumentKeyPress; // Export the custom hook
