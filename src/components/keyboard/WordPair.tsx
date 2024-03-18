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
  const [shuffledArray, setShuffledArray] = useState<WordPair[]>([{ german: 'Banana', korean: '바나나' }]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [vocaburaryHint, setDisassembledKorean] = useState<string>('');

  useEffect(() => {
    // Shuffle the array
    const shuffled = shuffleArray([...words]);
    setShuffledArray(shuffled);
  }, []);

  useEffect(() => {
    if (shuffledArray.length === 0) return;

    // Select the pair based on the selectedIndex
    const selectedPair = shuffledArray[selectedIndex];
    // Disassemble the Korean word
    const disassembled = Hangul.disassemble(selectedPair.korean).join('');
    // Display the pair
    setDisassembledKorean(disassembled);
  }, [selectedIndex, shuffledArray]);

  // Function to shuffle array
  const shuffleArray = (array: WordPair[]): WordPair[] => {
    console.log('shuffleArray starts');
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log('shuffleArray', array);
    return shuffled;
  };

  const handleNextPair = () => {
    // Increment the index to select the next pair
    setSelectedIndex((prevIndex) => (prevIndex + 1) % shuffledArray.length);
  };

  const resetTextDispaly = () => {
    setTimeout(() => {}, 1000); // 1 second duration
  };

  return (
    <div className="m-auto grid h-80 w-fit grid-cols-1 border-2 text-black">
      <div className="grid h-fit w-fit grid-cols-1 justify-self-center">
        <div
          className={`${
            shuffledArray.length > 0 &&
            textDisplay === shuffledArray[selectedIndex]?.korean
              ? 'font-effect-fire-animation'
              : ''
          } h-14 justify-self-center text-[50px]`}
        >
          {textDisplay}
        </div>
        <div
          className={`${
            shuffledArray.length > 0 &&
            textDisplay === shuffledArray[selectedIndex]?.korean
              ? 'font-effect-fire-animation'
              : ''
          } mt-2 justify-self-center text-[50px]`}
        >
          {shuffledArray.length > 0 && shuffledArray[selectedIndex]?.korean}
        </div>
      </div>
      <div className="">
        <div className={`flex h-[80px] text-center font-mono text-[60px]`}>
          {shuffledArray[selectedIndex].german
            .split('')
            .map((letter, index) => (
              <div
                className={
                  Hangul.disassemble(textDisplay).join('')[index] ===
                  vocaburaryHint[index]
                    ? 'font-effect-fire-animation'
                    : ''
                }
                key={`german-${index}`}
              >
                {letter}
              </div>
            ))}
        </div>
        <div
          className={`flex text-center font-mono text-[60px] font-extrabold`}
        >
          {vocaburaryHint.split('').map((letter, index) => (
            <div
              className={`${
                Hangul.disassemble(textDisplay).join('')[index] ===
                vocaburaryHint[index]
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
