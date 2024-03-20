import { useEffect, useState } from 'react';
import Hangul from 'hangul-js';
import styles from './styles.module.css';

interface WordPair {
  [key: string]: string[];
}

const words: WordPair[] = {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  laut: ['a', 'be', 'tse', 'de', 'e', 'ef', 'ge'],
  korean: ['아', '베', '체', '데', '에', '', '게'],
};

interface KeysProps {
  textDisplay: string;
  resetTextInput: () => void;
}

const TextDisplayComponent: React.FC<KeysProps> = ({
  textDisplay,
  resetTextInput,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [vocaburaryHint, setDisassembledKorean] = useState<string>('');

  
  return (
    <div className="min-w-[450px] max-w-[800px]">
      <div className=" m-auto  h-[320px] w-fit text-[50px] text-gray-700">
        <div className={`grid grid-cols-${words.alphabet.length} `}>
          {words.alphabet.map((letter, index) => (
            <div className="justify-self-center" key={index}>
              {letter}
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-${words.alphabet.length}`}>
          {words.laut.map((letter, index) => (
            <div className="justify-self-center" key={index}>
              {letter}
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-${words.alphabet.length}`}>
          {words.korean.map((letter, index) => (
            <div className="justify-self-center" key={index}>
              {letter}
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-${words.alphabet.length}`}>
          {Array.from(textDisplay).map((letter, index) => (
            <div className="justify-self-center" key={index}>
              {letter}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TextDisplayComponent;
