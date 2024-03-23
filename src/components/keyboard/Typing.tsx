import React, { useState } from 'react';
import Keyboard from './Keyboard';
import KeyboardSelector from './KeyboardSelector'; 
import useDocumentKeyPress from './useDocumentKeyPress';
import { hangulInputHandler } from './hangulInputHandler'; 
import WordPairDisplay from './WordPairDisplay';
import TextDisplay from './TextDisplay';
import type { WordList, WordPair } from '@/lib/definitions';

interface KeysProps {
  keyboardMode: 'original' | 'simple' | 'mixed';
  showKeyboardSelector: boolean;
  textDisplayType?: 'all' | 'pair';
  wordSet: WordPair |  WordList;
}

const Typing: React.FC<KeysProps> = ({
  keyboardMode = 'original',
  showKeyboardSelector = false,
  wordSet,
  textDisplayType= 'all',
}
) => {
 
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
      {textDisplayType==='pair' ? (
       <WordPairDisplay 
        textDisplay={completedLetters + composingLetter}
        resetTextInput={emptyInput}
        onMismatch={showNextClick}
        wordSet={wordSet as WordPair}
        />
      ) : (
        <TextDisplay 
        textDisplay={completedLetters + composingLetter}
        resetTextInput={emptyInput}
        wordSet={wordSet as WordList}
        />
     )}
      { showKeyboardSelector === true ?(
        <KeyboardSelector
          selectedLayout={selectedLayout}
          onSelectLayout={handleLayoutChange}
        />
        ) : ''
      }
        <Keyboard
          language={selectedLayout}
          mode={keyboardMode} 
          onClick={handleVirtualKeyInput}
          onShiftClick={handleShiftClick}
          {...(showKeyboardSelector === true ? { onCapslockClick: handleCapslockClick } : {})}
          nextClick={nextChar}
        />
        
    </div>
  )


};
export default Typing; // Export Typing component
