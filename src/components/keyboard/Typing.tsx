// Typing.tsx

import React, { useState } from 'react';
import Keys from './Keys';
import KeyboardSelector from './KeyboardSelector';
import { keyboardLayouts } from './keyboardLayouts';
import useDocumentKeyPress from './useDocumentKeyPress';
import useHangulInputHandler from './hangulInputHandler';

const Typing: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedLayout, setSelectedLayout] = useState<string>('german');
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);

  const { completedLetters, composingLetter, handleHangulInput } = useHangulInputHandler();

  useDocumentKeyPress((key) => {
    handleHangulInput(key);
  });

  const handleLayoutChange = (layout: string) => {
    setSelectedLayout(layout);
  };

  const handleShiftClick = () => {
    setIsShiftPressed((prevState) => !prevState);
    setSelectedLayout((prevLayout) =>
      prevLayout === 'korean' ? 'koreanShifted' : 'korean'
    );
  };

  return (
    <div>
      <p>completedLetters: {completedLetters} </p>
      <p>composingLetter: {composingLetter} </p>
      <p>{completedLetters + composingLetter} </p>
      <input type="text" value={completedLetters + composingLetter} readOnly className='w-2/3'/>
      <KeyboardSelector
        selectedLayout={selectedLayout}
        onSelectLayout={handleLayoutChange}
      />
      <Keys
        keyboardLayout={keyboardLayouts[selectedLayout]}
        onClick={handleHangulInput}
        onShiftClick={handleShiftClick}
      />
    </div>
  );
};

export default Typing;
