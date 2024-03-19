-- Inserting vowels into the PressCount table
INSERT INTO public."PressCount" (vowel, consonant, count)
VALUES 
('ㅏ', NULL, 0),
('ㅑ', NULL, 0),
('ㅓ', NULL, 0),
('ㅕ', NULL, 0),
('ㅗ', NULL, 0),
('ㅛ', NULL, 0),
('ㅜ', NULL, 0),
('ㅠ', NULL, 0),
('ㅡ', NULL, 0),
('ㅣ', NULL, 0),
('ㅔ', NULL, 0),
('ㅐ', NULL, 0),
('ㅒ', NULL, 0),
('ㅖ', NULL, 0),
('ㅘ', NULL, 0),
('ㅙ', NULL, 0),
('ㅚ', NULL, 0),
('ㅝ', NULL, 0),
('ㅞ', NULL, 0),
('ㅟ', NULL, 0),
('ㅢ', NULL, 0);


-- Inserting consonants into the PressCount table
INSERT INTO PressCount (vowel, consonant, count)
VALUES
(NULL, 'ㄱ', 0),
(NULL, 'ㄴ', 0),
(NULL, 'ㄷ', 0),
(NULL, 'ㄹ', 0),
(NULL, 'ㅁ', 0),
(NULL, 'ㅂ', 0),
(NULL, 'ㅅ', 0),
(NULL, 'ㅇ', 0),
(NULL, 'ㅈ', 0),
(NULL, 'ㅊ', 0),
(NULL, 'ㅋ', 0),
(NULL, 'ㅌ', 0),
(NULL, 'ㅍ', 0),
(NULL, 'ㅎ', 0),
(NULL, 'ㄲ', 0),
(NULL, 'ㄸ', 0),
(NULL, 'ㅃ', 0),
(NULL, 'ㅆ', 0),
(NULL, 'ㅉ', 0),
;








const koreanAlphabet   = [
{type: 'consonant' ,  value: 'ㄱ' ,  },
{type: 'consonant' ,  value: 'ㄴ' ,  },
{type: 'consonant' ,  value: 'ㄷ' ,  },
{type: 'consonant' ,  value: 'ㄹ' ,  },
{type: 'consonant' ,  value: 'ㅁ' ,  },
{type: 'consonant' ,  value: 'ㅂ' ,  },
{type: 'consonant' ,  value: 'ㅅ' ,  },
{type: 'consonant' ,  value: 'ㅇ' ,  },
{type: 'consonant' ,  value: 'ㅈ' ,  },
{type: 'consonant' ,  value: 'ㅊ' ,  },
{type: 'consonant' ,  value: 'ㅋ' ,  },
{type: 'consonant' ,  value: 'ㅌ' ,  },
{type: 'consonant' ,  value: 'ㅍ' ,  },
{type: 'consonant' ,  value: 'ㅎ' ,  },
{type: 'consonant' ,  value: 'ㄲ' ,  },
{type: 'consonant' ,  value: 'ㄸ' ,  },
{type: 'consonant' ,  value: 'ㅃ' ,  },
{type: 'consonant' ,  value: 'ㅆ' ,  },
{type: 'consonant' ,  value: 'ㅉ' ,  }

{type: 'vowl'      ,  value: 'ㅏ' ,  },
{type: 'vowl'      ,  value: 'ㅑ' ,  },
{type: 'vowl'      ,  value: 'ㅓ' ,  },
{type: 'vowl'      ,  value: 'ㅕ' ,  },
{type: 'vowl'      ,  value: 'ㅗ' ,  },
{type: 'vowl'      ,  value: 'ㅛ' ,  },
{type: 'vowl'      ,  value: 'ㅜ' ,  },
{type: 'vowl'      ,  value: 'ㅠ' ,  },
{type: 'vowl'      ,  value: 'ㅡ' ,  },
{type: 'vowl'      ,  value: 'ㅣ' ,  },
{type: 'vowl'      ,  value: 'ㅔ' ,  },
{type: 'vowl'      ,  value: 'ㅐ' ,  },
{type: 'vowl'      ,  value: 'ㅒ' ,  },
{type: 'vowl'      ,  value: 'ㅖ' ,  },

{type: 'cvowl'      ,  value:'ㅘ' ,  },
{type: 'vowl'      ,  value: 'ㅙ' ,  },
{type: 'vowl'      ,  value: 'ㅚ' ,  },
{type: 'vowl'      ,  value: 'ㅝ' ,  },
{type: 'vowl'      ,  value: 'ㅟ' ,  },
{type: 'vowl'      ,  value: 'ㅢ' ,  },    
];
  
 
w