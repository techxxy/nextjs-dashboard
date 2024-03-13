import React, { useState } from 'react';
import Keys from './Keys';
import KeyboardSelector from './KeyboardSelector'; // Import component for selecting keyboard layout
import { keyboardLayouts } from './keyboardLayouts'; // Import predefined keyboard layouts
import useDocumentKeyPress from './useDocumentKeyPress'; 
import useHangulInputHandler from './hangulInputHandler'; // Import custom hook for handling Hangul input


const Typing: React.FC = () => {
  // State variables
  const [selectedLayout, setSelectedLayout] = useState<string>('german'); // State for selected keyboard layout
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false); // State for shift key status
 // const { handleHangulInput } = useHangulInputHandler(); // Custom hook for Hangul input handling
  const [completedLetters, setCompletedLetters] = useState<string>('');
  const [composingLetter, setComposingLetter] = useState<string>('');
  const [superDelete, setSuperDelete] = useState<boolean>(false); // State for shift key status


  // Effect hook to handle key presses on the document
    useDocumentKeyPress((key) => { // Real keyboard handler
    const results = useHangulInputHandler(completedLetters, composingLetter, superDelete, key);
    setCompletedLetters(results.completedLetters);
    setComposingLetter(results.composingLetter);
    setSuperDelete(results.superDelete);
  });

  const handleVirtualKeyInput = (value: string) => { // Virtual keyboard handler
    const results = useHangulInputHandler(completedLetters, composingLetter, superDelete, value);
    setCompletedLetters(results.completedLetters);
    setComposingLetter(results.composingLetter);
    setSuperDelete(results.superDelete);
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
      <p className='w-2/3 h-11'> {completedLetters + composingLetter} </p>
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