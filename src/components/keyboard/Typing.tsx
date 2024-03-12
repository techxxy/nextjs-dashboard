import React, { useState } from 'react';
import Keys from './Keys';
import KeyboardSelector from './KeyboardSelector';
import { keyboardLayouts } from './keyboardLayouts';
import useDocumentKeyPress from './useDocumentKeyPress';

const Typing: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedLayout, setSelectedLayout] = useState<string>('german');
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);

  // Listen to key presses on the document
  useDocumentKeyPress((key) => {
    setInputValue((prevValue) => prevValue + key);
  });

  const handleLayoutChange = (layout: string) => {
    setSelectedLayout(layout);
  };

  const handleClick = (key: string) => {
    setInputValue(prevValue => prevValue + key);
    if (isShiftPressed) {
      setIsShiftPressed(false); // Reset shift state after a key press
      setSelectedLayout('korean'); // Set layout back to normal after a key press
    }
  };

  const handleShiftClick = () => {
    setIsShiftPressed(prevState => !prevState);
    setSelectedLayout(prevLayout =>
      prevLayout === 'korean' ? 'koreanShifted' : 'korean'
    );
  };

  return (
    <div>
      <input type="text" value={inputValue} readOnly />
      <KeyboardSelector selectedLayout={selectedLayout} onSelectLayout={handleLayoutChange} />
      <Keys keyboardLayout={keyboardLayouts[selectedLayout]} onClick={handleClick} onShiftClick={handleShiftClick} />
    </div>
  );
};

export default Typing;
