import Hangul from 'hangul-js'; // Importing Hangul module

type HandlerResults = {
  completedLetters: string;
  composingLetter: string;
  superDelete: boolean;
};

const isNotKorean = (text: string) => {
  const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return !koreanCheck.test(text);
};

const handleBackspace = (
  completedLetters: string,
  composingLetter: string,
  superDelete: boolean,
): HandlerResults => {
  console.log('Lets handle backspace');
  
  if (superDelete || composingLetter.length === 0) {
    // Handle deletion of completedLetters
    if (completedLetters.length === 0) {
      // No more characters to delete
      return {
        completedLetters,
        composingLetter: '',
        superDelete: true,
      };
    } else {
      // Remove the last character from completedLetters
      return {
        completedLetters: completedLetters.slice(0, -1),
        composingLetter: '',
        superDelete: true,
      };
    }
  } else {
    // Handle deletion of composingLetter
    const lastLetterGroup = Hangul.disassemble(composingLetter);
    if (lastLetterGroup.length > 0) {
      // Remove the last character from composingLetter
      const newComposingLetter = Hangul.assemble(lastLetterGroup.slice(0, -1));
      return {
        completedLetters,
        composingLetter: newComposingLetter,
        superDelete: true,
      };
    } else {
      // No more characters to delete
      return {
        completedLetters,
        composingLetter: '',
        superDelete: true,
      };
    }
  }
};

const useHangulInputHandler = (
  completedLetters: string,
  composingLetter: string,
  superDelete: boolean,
  newChar: string,
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
    console.log("BackspaceBackspaceBackspaceBackspaceBackspace");
    return handleBackspace(completedLetters, composingLetter, superDelete);
  }

  return {
    completedLetters,
    composingLetter,
    superDelete,
  };
};

export default useHangulInputHandler;