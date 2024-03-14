
import React, { useState } from 'react';
import Keys from './Keys';
import KeyboardSelector from './KeyboardSelector'; // Import component for selecting keyboard layout
import { keyboardLayouts } from './keyboardLayouts'; // Import predefined keyboard layouts
import useDocumentKeyPress from './useDocumentKeyPress'; 
import {hangulInputHandler} from './hangulInputHandler'; // Import custom hook for handling Hangul input


const Typing: React.FC = () => {
  // State variables
  const [selectedLayout, setSelectedLayout] = useState<string>('german'); // State for selected keyboard layout
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false); // State for shift key status
  const [completedLetters, setCompletedLetters] = useState<string>('');
  const [composingLetter, setComposingLetter] = useState<string>('');

  
  
  // Effect hook to handle key presses on the documents
    useDocumentKeyPress((key) => { // Real keyboard handler
    const results = hangulInputHandler(completedLetters, composingLetter, key);
    setCompletedLetters(results.completedLetters);
    setComposingLetter(results.composingLetter);
  });

  const handleVirtualKeyInput = (key: string) => { // Virtual keyboard handler
    const results = hangulInputHandler(completedLetters, composingLetter, key);
    setCompletedLetters(results.completedLetters);
    setComposingLetter(results.composingLetter);
  };

  // Function to handle layout change
  const handleLayoutChange = (layout: string) => {
    setSelectedLayout(layout); // Update selected layout state
  };

    // Function to handle shift key click
  const handleShiftClick = () => {
    setIsShiftPressed((prevState) => !prevState); // Toggle shift key status
    setSelectedLayout((prevLayout) =>
      prevLayout === 'korean' ? 'koreanShifted' : 'korean'
    ); // Change layout to shifted or unshifted Korean based on previous layout
  };

  return (
    <div>
      <p className='w-2/3 h-11'>completedLetters: {completedLetters} </p>
      <p className='w-2/3 h-11'>composingLetter: {composingLetter} </p>
      <p className='w-2/3 h-11'>All {completedLetters + composingLetter} </p>
      <KeyboardSelector
        selectedLayout={selectedLayout}
        onSelectLayout={handleLayoutChange}
      />
      <Keys
        keyboardLayout={keyboardLayouts[selectedLayout]}
        onClick={handleVirtualKeyInput}
        onShiftClick={handleShiftClick}
      /> 
    </div>
  );
};

export default Typing; // Export Typing component