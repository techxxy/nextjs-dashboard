import { useState } from 'react';
import Hangul from 'hangul-js';

const useHangulInputHandler = () => {
  const [completedLetters, setCompletedLetters] = useState<string>('');
  const [composingLetter, setComposingLetter] = useState<string>('');

  const handleHangulInput = (newChar: string) => {
    if (isNotKorean(newChar)) {
      if (composingLetter !== '') {
        setCompletedLetters((prev) => prev + composingLetter + newChar);
        setComposingLetter('');
      } else {
        setCompletedLetters((prev) => prev + newChar);
      }
    } else {
      setComposingLetter((prev) => {
        let assembled = Hangul.a(prev + newChar);
        if (assembled.length === 1) {
          return assembled;
        } else if (assembled.length === 2) {
          setCompletedLetters((prevCompleted) => prevCompleted + assembled[0]);
          return assembled[1];
        }
        return prev;
      });
    }
  };

  const isNotKorean = (text: string) => {
    const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return !koreanCheck.test(text);
  };

  return { completedLetters, composingLetter, handleHangulInput };
};

export default useHangulInputHandler;