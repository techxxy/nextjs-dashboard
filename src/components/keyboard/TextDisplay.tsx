import React, { useEffect, useState } from 'react';
import Hangul from 'hangul-js';
import styles from './styles.module.css';
import type { WordList } from '@/lib/definitions';

interface KeysProps {
  textDisplay: string;
  resetTextInput: () => void;
  wordSet: WordList;
}

const TextDisplay: React.FC<KeysProps> = ({
  textDisplay,
  resetTextInput,
  wordSet,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [vocaburaryHint, setDisassembledKorean] = useState<string>('');

  const columns = wordSet.korean.length;
  console.log('wordSet.korean.length', wordSet.korean.length);

  const renderWordLetters = (word: string[], isKorean: boolean) => {

    return (
      <div className={`flex flex-row text-base w-full max-w-5xl`}>
        {word.map((letter, index) => (
          <div
            className={`flex-1 justify-self-center text-center border-2 ${
              isKorean && letter === textDisplay[index] ? 'neon' : ''
            }`}
            key={index}
          >
            {letter}
          </div>
        ))}
      </div>
    );
  };


function fontEffect(index: number, letter: string){
    return letter === wordSet.korean?.[index] ? 'font-effect-neon' : ''
  }
  
  return (
    <div className="min-w-[450px] max-w-[800px] font-mono border-2 text-[30px]">
      <div className="h-[320px] w-full text-gray-700 border-2">
        {Object.entries(wordSet).map(([key, word], index) => (
          <React.Fragment key={index}>
            {renderWordLetters(word, key === 'korean')}
          </React.Fragment>
        ))}
        <div className={`grid grid-cols-24 gap-1 w-full max-w-5xl`}>
          {Array.from(textDisplay).map((letter, index) => (
            <div
              className={`col-span-1 justify-self-center text-center border-2 ${
                fontEffect(index, letter)
              }`}
              key={index}>
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default TextDisplay;