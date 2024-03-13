import { useState } from 'react'; // Importing useState hook from React
import Hangul from 'hangul-js'; // Importing Hangul module
import { any } from 'zod'; // Importing any from zod module (seems unused)

type HandlerResults = {
  completedLetters: string;
  composingLetter: string;
};

const isNotKorean = (text: string) => {
  const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // Regular expression to match Korean characters
  return !koreanCheck.test(text); // Return true if text does not match Korean characters
};

const useHangulInputHandler = (
  completedLetters: string,
  composingLetter: string,
  newChar: string,
) => {
  if (isNotKorean(newChar) == true) {
    completedLetters = completedLetters + composingLetter + newChar; //ㄱ ㅏ ㄴ ㄴ a -> 간ㄴa
    composingLetter = '';
  } else {
    // ㄱㅏㅂㅅㅏ -> 갑 & 사
    composingLetter += newChar;
    var assembled = Hangul.a(Hangul.d(composingLetter));
    composingLetter = assembled;

    if (assembled.length == 2) {
      // 값 + ㅏ -> 갑 & 사
      completedLetters += assembled.slice(0, -1);
      composingLetter = assembled.slice(-1);
    }
  }

  const myInstance: HandlerResults = {
    completedLetters: completedLetters,
    composingLetter: composingLetter,
  };
  return myInstance;
};

export default useHangulInputHandler;

// Custom hook for handling Hangul input
/* const useHangulInputHandler = () => {
  // State variables to track completed letters and composing letter
  const [completedLetters, setCompletedLetters] = useState<string>('');
  const [composingLetter, setComposingLetter] = useState<string>('');

  // Function to handle Hangul input
  const handleHangulInput = (newChar: string) => {
    
    console.log('handleHangulInput newChar', newChar);
    // Check if the input character is not Korean
    if (isNotKorean(newChar)) {
      console.log('isNotKorean(newChar)', isNotKorean(newChar));

      // Append composing letter and new character to completed letters
      setCompletedLetters((prev) => prev + composingLetter + newChar);
      // Reset composing letter
      setComposingLetter('');

    } else {
      console.log('isNotKorean(newChar)', isNotKorean(newChar));
      // If the input character is Korean
      setComposingLetter((prev) => {
        console.log('setComposingLetter((prev)', prev);
        // Assemble Hangul characters
        let assembled = Hangul.a(Hangul.d(prev + newChar)); // Convert to array of characters
        console.log('assembled 2222', assembled);

        // If assembled length is 1, return it
        if (assembled.length === 1) {
          console.log('assembled.length === 1' );
          return assembled;
        } else if (assembled.length === 2) { // If assembled length is 2
          console.log('assembled.length === 2' );
          // Append the first character to completed letters
          setCompletedLetters((prevCompleted) => {
            
            const testtest = prevCompleted + assembled[0];
            console.log('setCompletedLetters((prevCompleted)', testtest );
            return testtest;
          });
          
          // Return the second character as composing letter
          return assembled[1];
        } else {
          console.log('assembled.length: ', assembled.length  );
          return prev;   // Return previous composing letter if assembled length is neither 1 nor 2
        }
      });

    }
  };

  // Function to check if a text is not Korean
  const isNotKorean = (text: string) => {
    const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // Regular expression to match Korean characters
    return !koreanCheck.test(text); // Return true if text does not match Korean characters
  };

  // Return state variables and function for handling Hangul input
  return { completedLetters, composingLetter, handleHangulInput };
};

export default useHangulInputHandler; // Exporting the custom hook */
