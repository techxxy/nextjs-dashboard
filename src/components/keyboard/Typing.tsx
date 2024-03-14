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
  const [completedLetters, setCompletedLetters] = useState<string>('');
  const [composingLetter, setComposingLetter] = useState<string>('');

  // Effect hook to handle key presses on the document
    useDocumentKeyPress((key) => { // Real keyboard handler
    const results = useHangulInputHandler(completedLetters, composingLetter, key);
    setCompletedLetters(results.completedLetters);
    setComposingLetter(results.composingLetter);
  });

  const handleVirtualKeyInput = (value: string) => { // Virtual keyboard handler
    const results = useHangulInputHandler(completedLetters, composingLetter, value);
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

  const renderKeys = () => {
    const layout = keyboardLayouts[selectedLayout];
    if (selectedLayout === 'original') {
      return layout.map((key, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: key }} // Render HTML elements
          onClick={() => handleVirtualKeyInput(key)}
          className='h-11'
        />
      ));
    } else {
      return layout.map((key, index) => (
        <Keys
          key={index}
          keyboardLayout={key}
          onClick={handleVirtualKeyInput}
          onShiftClick={handleShiftClick}
        />
      ));
    }
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
      {renderKeys()} {/* Render keys based on layout */}
    </div>
  );
};

export default Typing;