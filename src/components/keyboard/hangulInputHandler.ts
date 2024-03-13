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

const useHangulInputHandler = (
  completedLetters: string,
  composingLetter: string,
  superDelete: boolean,
  newChar: string,
) => {
  if (newChar.length === 1) {
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
  } else {
    console.log('Lets handle backspace');

    if ((newChar == 'Backspace')) {
      var newAllLetters = completedLetters + composingLetter;
      var lastLetterGroup = Hangul.disassemble(composingLetter);
      var text = completedLetters + composingLetter;
      // checking last letter is korean

      var a = ''; // After delete Char
      if (text.length == 0) {
        // test: "" + backspace
      } else if (isNotKorean(composingLetter) == true || superDelete == true) {
        // test: "alphanumeric" + backspace
        completedLetters = text.slice(0, -1);
        composingLetter = '';
        superDelete = true;
      } else if (lastLetterGroup.length == 1 && superDelete == false) {
        // test: "딸ㄲ" + backspace
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
        }
        composingLetter = a;
        superDelete = true;
      } else if (lastLetterGroup.length == 2 && superDelete == false) {
        //test: "딸까" + backspace
        composingLetter = Hangul.assemble(lastLetterGroup.slice(0, -1));
      } else if (lastLetterGroup.length == 3 && superDelete == false) {
        // test: "딸깎" + backspace
        composingLetter = Hangul.assemble(lastLetterGroup.slice(0, -1));
        lastLetterGroup[2] = newChar;
        composingLetter = Hangul.assemble(lastLetterGroup);
      } else if (lastLetterGroup.length == 4 && superDelete == false) {
        //test: "딸값" + backspace

        composingLetter = Hangul.assemble(lastLetterGroup.slice(0, -1));
      }
      console.log('backspaceed ending....');
    }

  }
  const myInstance: HandlerResults = {
    completedLetters: completedLetters,
    composingLetter: composingLetter,
    superDelete: superDelete,
  };
  return myInstance;
};

export default useHangulInputHandler;
