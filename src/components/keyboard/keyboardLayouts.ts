export interface KeyboardLayouts {
    germanShifted: string[];
    german: string[];
    koreanShifted: string[];
    korean: string[];
    original: string[];
}

export const keyboardLayouts = {
    germanShifted: [
        '°', '+', '"', '*', 'ç', '%', '&', '/', '(', ')', '=', '?', '`', 
        'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'ü', '¨', '$',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ö', 'ä',
        '>', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-', ' '
    ],
    german: ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '\'', '^',
        'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ü', '¨', '$',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä',
        '<', 'y', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', ' '
    ],
    koreanShifted: ['±', '!', '@', '#', '$', '%', '^', '&', '*', '*', ')', '_', '+',
        'ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', '{', '}', '|',
        'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', ':', '"',
        '~', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '<', '<', '>', ' '
    ],
    korean: ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
        'ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', '[', ']', '\\',
        'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', '\;', '\'',
        '₩', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', ',', '.', '/', ' '
    ],
    original: ['<div class="upper-part key-value">°</div> <div class="lower-part key-value">§ </div>',
    '<div class="upper-part key-value">+         </div> <div class="lower-part key-value">1      </div>',
    '<div class="upper-part key-value">"    </div> <div class="lower-part key-value">2      </div>',
    '<div class="upper-part key-value">*     </div> <div class="lower-part key-value">3      </div>',
    '<div class="upper-part key-value">ç         </div> <div class="lower-part key-value">4      </div>',
    '<div class="upper-part key-value">%  </div> <div class="lower-part key-value">5      </div>',
    '<div class="upper-part key-value">&amp;     </div> <div class="lower-part key-value">6      </div>',
    '<div class="upper-part key-value">/     </div> <div class="lower-part key-value">7      </div>',
    '<div class="upper-part key-value">(    </div> <div class="lower-part key-value">8     </div>',
    '<div class="upper-part key-value">)    </div> <div class="lower-part key-value">9      </div>',
    '<div class="upper-part key-value">=         </div> <div class="lower-part key-value">0       </div>',
    '<div class="upper-part key-value">?   </div> <div class="lower-part key-value">\' </div>',
    '<div class="upper-part key-value">`   </div> <div class="lower-part key-value">^  </div>',
    '<div class="qType"> <div class="ko2 key-value">ㅃ    </div> <div class="de1 key-value">Q       </div> <div class="ko2">ㅂ</div> </div>', 
    '<div class="qType"> <div class="ko2 key-value">ㅉ    </div> <div class="de1 key-value">W       </div> <div class="ko2">ㅈ</div> </div>', 
    '<div class="qType"> <div class="ko2 key-value">ㄸ    </div> <div class="de1 key-value">E       </div> <div class="ko2">ㄷ</div> </div>', 
    '<div class="qType"> <div class="ko2 key-value">ㄲ    </div> <div class="de1 key-value">R       </div> <div class="ko2">ㄱ</div> </div>', 
    '<div class="qType"> <div class="ko2 key-value">ㅆ    </div> <div class="de1 key-value">T       </div> <div class="ko2">ㅅ</div> </div>', 
    '<div class="aType"> <div class="de1 key-value">Z    </div> <div class="ko1 key-value">ㅛ       </div> </div>',
    '<div class="aType"> <div class="de1 key-value">U    </div> <div class="ko1 vowel key-value">ㅕ </div> </div>',
    '<div class="aType"> <div class="de1 key-value">I    </div> <div class="ko1 vowel key-value">ㅑ </div> </div>',
    '<div class="qType"> <div class="ko2 key-value">ㅒ    </div> <div class="de1 key-value">O       </div> <div class="ko2">ㅐ</div> </div>', 
    '<div class="qType"> <div class="ko2 key-value">ㅖ    </div> <div class="de1 key-value">P       </div> <div class="ko2">ㅔ</div> </div>', 
    'é &nbsp;&nbsp; ö',
    '<div class="upper-part key-value">!</div> <div class="lower-part key-value">"</div>',
    '<div class="upper-part key-value">£</div> <div class="lower-part key-value">$</div>',
    '<div class="aType"> <div class="de1 key-value">A</div> <div class="ko1 key-value">ㅁ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">S</div> <div class="ko1 key-value">ㄴ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">D</div> <div class="ko1 key-value">ㅇ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">F</div> <div class="ko1 key-value">ㄹ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">G</div> <div class="ko1 key-value">ㅎ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">H</div> <div class="ko1 key-value">ㅗ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">J</…> <div class="ko1 vowel key-value">ㅓ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">K</…> <div class="ko1 vowel key-value">ㅏ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">L</…> <div class="ko1 vowel key-value">ㅣ</div> </div>',
    '<div class="key-value">é &nbsp;&nbsp; ö</div>',
    '<div class="key-value">à &nbsp;&nbsp; ä</div>',
    '<div class="upper-part key-value">&gt;</div> <div class="lower-part key-value">&lt;</div>',
    '<div class="aType"> <div class="de1 key-value">Y</div> <div class="ko1 key-value">ㅋ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">X</div> <div class="ko1 key-value">ㅌ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">C</div> <div class="ko1 key-value">ㅊ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">V</div> <div class="ko1 key-value">ㅍ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">B</div> <div class="ko1 key-value">ㅠ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">N</div> <div class="ko1 key-value">ㅜ</div> </div>',
    '<div class="aType"> <div class="de1 key-value">M</div> <div class="ko1 key-value">ㅡ</div> </div>',
    '<div class="upper-part key-value">;</div> <div class="lower-part key-value">,</div>',
    '<div class="upper-part key-value">:</div> <div class="lower-part key-value">.</div>',
    '<div class="upper-partkey-value">―</div> <div class="lower-part key-value">-</div>',
    '&nbsp']
};