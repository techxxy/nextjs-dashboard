import Hangul from 'hangul-js'; // Importing Hangul module

type HandlerResults = {
  completedLetters: string;
  composingLetter: string;
};

const isNotKorean = (text: string) => {
  const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return !koreanCheck.test(text);
};

const handleBackspace = (
  completedLetters: string,
  composingLetter: string,
): HandlerResults => {
  
  if (composingLetter.length === 0) {
    // Handle deletion of completedLetters
    if (completedLetters.length === 0) {
      // No more characters to delete
      return {
        completedLetters,
        composingLetter: '',
      };
    } else {
      // Remove the last character from completedLetters
      return {
        completedLetters: completedLetters.slice(0, -1),
        composingLetter: '',
      };
    }
  } else {
    // Handle deletion of composingLetter
    const lastLetterGroup = Hangul.disassemble(composingLetter);
    if (lastLetterGroup.length === 1) {
      let a: string;
      if (lastLetterGroup[0] == 'ㄲ') {
        a = 'ㄱ';
      } else if (lastLetterGroup[0] == 'ㄸ') {
        a = 'ㄷ';
      } else if (lastLetterGroup[0] == 'ㅃ') {
        a = 'ㅂ';
      } else if (lastLetterGroup[0] == 'ㅆ') {
        a = 'ㅅ';
      } else if (lastLetterGroup[0] == 'ㅉ') {
        a = 'ㅈ';
      } else {
        a = ''
      }
      return {
        completedLetters,
        composingLetter: a,
      };
    } else if (lastLetterGroup.length > 1) {
      // Remove the last character from composingLetter
      const newComposingLetter = Hangul.assemble(lastLetterGroup.slice(0, -1));
      return {
        completedLetters,
        composingLetter: newComposingLetter,
      };
    } else {
      // No more characters to delete
      return {
        completedLetters,
        composingLetter: '',
      };
    }
  }
};

const useHangulInputHandler = (
  completedLetters: string,
  composingLetter: string,
  newChar: string ='',
): HandlerResults => {
  if (newChar.length === 1) {
    if (isNotKorean(newChar)) {
      completedLetters += composingLetter + newChar;
      composingLetter = '';
    } else {
      composingLetter += newChar;
      const assembled = Hangul.a(Hangul.d(composingLetter));
      composingLetter = assembled;

      if (assembled.length === 2) {
        completedLetters += assembled.slice(0, -1);
        composingLetter = assembled.slice(-1);
      }
    }
  } else if (newChar === 'Backspace') {
    return handleBackspace(completedLetters, composingLetter);
  }

  return {
    completedLetters,
    composingLetter,
  };
};

export default useHangulInputHandler;