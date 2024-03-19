import { useEffect, useState } from 'react';
import Hangul from 'hangul-js';
import styles from './styles.module.css';

interface KeysProps {
  textDisplay: string;
  resetTextInput: () => void;
  onMismatch: (mismatch: string) => void; 
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

const WordPairComponent: React.FC<KeysProps> = ({
  textDisplay,
  resetTextInput,
  onMismatch,
}) => {
  const [shuffledArray, setShuffledArray] = useState<WordPair[]>([
    { german: '', korean: '' },
  ]);
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


  useEffect(() => {
    // Find the first mismatched character
    for (let i = 0; i < vocaburaryHint.length; i++) {
      if (Hangul.disassemble(textDisplay).join('')[i] !== vocaburaryHint[i]) {
        // Send the mismatched character to the parent component
        onMismatch(vocaburaryHint[i]);
        break;
      }
    }
  }, [textDisplay, vocaburaryHint, onMismatch]);


  useEffect(() => {
    if (textDisplay === shuffledArray[selectedIndex]?.korean) {
      // Empty textDisplay
      // Reset the selected index to move to the next pair
      setTimeout(() => {
        resetTextInput();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % shuffledArray.length);
      }, 1000);
    }
  }, [textDisplay, selectedIndex, shuffledArray]);

  // Function to shuffle array
  const shuffleArray = (array: WordPair[]): WordPair[] => {
    console.log('shuffleArray starts');
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log('const shuffleArray', shuffled);
    return shuffled;
  };

  return (
  <div className='max-w-[800px] min-w-[450px]'>
    <div className="m-auto grid h-[320px] w-fit grid-cols-1 text-gray-700">
      <div className="grid w-fit grid-cols-1 justify-self-center">
        <div
          className={`${
            shuffledArray.length > 0 &&
            textDisplay === shuffledArray[selectedIndex]?.korean
              ? 'font-effect-fire-animation'
              : ''
          } h-[50px] justify-self-left text-[50px]`}
        >
          {textDisplay}
        </div>
        <div
          className={`${
            shuffledArray.length > 0 &&
            textDisplay === shuffledArray[selectedIndex]?.korean
              ? 'font-effect-fire-animation'
              : ''
          } h-[60px] justify-self-center text-[50px]`}
        >
          {shuffledArray.length > 0 && shuffledArray[selectedIndex]?.korean}
        </div>
      </div>
      <div className="">
        <div className={`h-[60px] mb-4 flex text-center font-mono text-[60px]`}>
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
          className={`h-[60px] flex text-center font-mono text-[60px] font-extrabold`}
        >
          {vocaburaryHint.split('').map((letter, index) => (
            <div
              className={`${
                Hangul.disassemble(textDisplay).join('')[index] === vocaburaryHint[index] ? 'font-effect-fire-animation' : ''
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
    </div>
  );
};

export default WordPairComponent;
