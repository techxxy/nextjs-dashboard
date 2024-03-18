import React, { useState } from 'react';
import Keys from './Keys';
import KeyboardSelector from './KeyboardSelector'; // Import component for selecting keyboard layout
import { keyboardLayouts } from './keyboardLayouts'; // Import predefined keyboard layouts
import useDocumentKeyPress from './useDocumentKeyPress';
import { hangulInputHandler } from './hangulInputHandler'; // Import custom hook for handling Hangul input
import { Boundary } from '@/components/ui/boundary';
import WordPairComponent from './WordPair';

const Typing: React.FC = () => {
  // State variables
  const [selectedLayout, setSelectedLayout] = useState<string>('korean'); // State for selected keyboard layout
  const [completedLetters, setCompletedLetters] = useState<string>('');
  const [composingLetter, setComposingLetter] = useState<string>('');
  const [nextChar, setNextChar] = useState<string>('');


  // Effect hook to handle key presses on the documents
  useDocumentKeyPress((key) => {
    // Real keyboard handler
    const results = hangulInputHandler(completedLetters, composingLetter, key);
    setCompletedLetters(results.completedLetters);
    setComposingLetter(results.composingLetter);
  });

  const handleVirtualKeyInput = (key: string) => {
    // Virtual keyboard handler
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
    setSelectedLayout((prevLayout) =>
      prevLayout === 'korean'
        ? 'koreanShifted'
        : prevLayout === 'german'
        ? 'germanShifted'
        : prevLayout === 'germanShifted'
        ? 'german'
        : 'korean',
    ); // Change layout to shifted or unshifted Korean based on previous layout
  };

  // Function to handle shift key click
  const handleCapslockClick = () => {
    setSelectedLayout((prevLayout) =>
      prevLayout === 'korean'
        ? 'german'
        : prevLayout === 'koreanShifted'
        ? 'germanShifted'
        : prevLayout === 'germanShifted'
        ? 'koreanShifted'
        : 'korean',
    ); // Change layout to shifted or unshifted Korean based on previous layout
  };

  const emptyInput = () => {
    setCompletedLetters('');
    setComposingLetter('');
  };

  const showNextClick = (nextChar: string) => {
    setNextChar(nextChar); // Set the nextChar state
    console.log('nextChar', nextChar);
  }

  return (
    <div>
      <Boundary
        labels={['Korean']}
        color="pink"
        size="small"
        animateRerendering={true}
      >
        <WordPairComponent 
        textDisplay={completedLetters + composingLetter}
        resetTextInput={emptyInput}
        onMismatch={showNextClick}
        />
      </Boundary>

      <KeyboardSelector
        selectedLayout={selectedLayout}
        onSelectLayout={handleLayoutChange}
      />
      <Boundary
        labels={['Tastatur']}
        color="default"
        size="small"
        animateRerendering={false}
      >
        <Keys
          language={selectedLayout}
          keyboardLayout={keyboardLayouts[selectedLayout]}
          onClick={handleVirtualKeyInput}
          onShiftClick={handleShiftClick}
          onCapslockClick={handleCapslockClick}
          nextClick={nextChar}
        />
      </Boundary>
    </div>
  );
};

export default Typing; // Export Typing component
