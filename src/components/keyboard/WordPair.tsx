import { useEffect, useState } from 'react';
import Hangul from 'hangul-js';
import styles from './styles.module.css';

interface KeysProps {
  textDisplay: string;
}

interface WordPair {
  german: string;
  korean: string;
}

const words: WordPair[] = [
  { german: 'Kino', korean: '키노' },
  { german: 'Banana', korean: '바나나' },
  { german: 'Kanal', korean: '카날' },
  { german: 'Kugel', korean: '쿠겔' },
  { german: 'man', korean: '만' },
  { german: 'Nutella', korean: '누텔라' },
  { german: 'Du', korean: '두' },
];

const WordPairComponent: React.FC<KeysProps> = ({ textDisplay }) => {
  const [pair, setPair] = useState<WordPair>({ german: '', korean: '' });
  const [vocaburaryHint, setDisassembledKorean] = useState<string>('');

  useEffect(() => {
    // Shuffle the array
    const shuffledArray = shuffleArray([...words]);

    // Select the first pair
    const selectedPair = shuffledArray[0];

    // Disassemble the Korean word
    const disassembled = Hangul.disassemble(selectedPair.korean).join('');

    // Display the pair
    setPair(selectedPair);
    setDisassembledKorean(disassembled);
  }, []);

  // Function to shuffle array
  const shuffleArray = (array: WordPair[]): WordPair[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="text-black m-auto grid w-fit grid-cols-1">
      <div className="grid w-fit grid-cols-1 justify-self-center">
        <div className="h-14 justify-self-center text-[50px]">{textDisplay}</div>
        <div className="justify-self-center text-[50px] mt-2">{pair.korean}</div>
      </div>
      <div className="">
        <div
          
          className={`h-[80px] font-mono flex text-center text-[60px]`}
        >
          {pair.german.split('').map((letter, index) => (
            <div className={Hangul.disassemble(textDisplay).join('')[index] === vocaburaryHint[index] ? 'font-effect-fire-animation' : ''} key={`german-${index}`}>
              {letter}
            </div>
          ))}
        </div>
        <div
          className={`font-mono font-extrabold flex text-center text-[60px]`}
        >
          {vocaburaryHint.split('').map((letter, index) => (
            <div
              className={`${
                Hangul.disassemble(textDisplay).join('')[index] === vocaburaryHint[index]
                  ? 'font-effect-fire-animation'
                  : ''
              } 
               text-[42px] `}
              key={`korean-${index}`}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordPairComponent;