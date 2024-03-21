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

  const renderWordLetters = (word: string[], isKorean: boolean) => {
    return (
      <div className={`grid grid-cols-${columns}`}>
        {word.map((letter, index) => (
          <div
            className={`justify-self-center border-2 ${
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

  const columns = wordSet.korean.length;

  function fontEffect(index: number, letter: string){
    return letter === wordSet.korean?.[index] ? 'font-effect-neon' : ''
  }
  
  return (
    <div className="min-w-[450px] max-w-[800px] font-mono border-2 text-[30px]">
      <div className="m-auto h-[320px] w-fit  text-gray-700 border-2">
        {Object.entries(wordSet).map(([key, word], index) => (
          <React.Fragment key={index}>
            {renderWordLetters(word, key === 'korean')}
          </React.Fragment>
        ))}
        <div className={`grid grid-cols-${columns}`}>
          {Array.from(textDisplay).map((letter, index) => (
            <div
              className={`justify-self-center border-2 ${
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