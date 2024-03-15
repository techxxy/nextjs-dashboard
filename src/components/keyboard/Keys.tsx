import styles from './styles.module.css';
import React from 'react';
import Key from './Key';
import FnKeys from './FnKeys';
import { MdOutlineBackspace } from 'react-icons/md';

interface KeysProps {
  keyboardLayout: string[];
  onClick: (key: string) => void;
  onShiftClick: () => void;
  language: string;
}

const Keys: React.FC<KeysProps> = ({
  keyboardLayout,
  language,
  onClick,
  onShiftClick,
}) => {
  const specialKeys = [
    'Tab',
    'Lock',
    'Shift',
    'Control',
    'Option',
    'Command',
    'Space',
    'Backspace',
    'Enter',
    'esc',
  ];

  const keys = [
    { code: 'IntlBackslash', german: '§' , germanShifted: '°' , korean: '~',  koreanShifted: '₩', },
    { code: 'Digit1'       , german: '1' , germanShifted: '+' , korean: '1',  koreanShifted: '!', },
    { code: 'Digit2'       , german: '2' , germanShifted: '"' , korean: '2',  koreanShifted: '@', },
    { code: 'Digit3'       , german: '3' , germanShifted: '*' , korean: '3',  koreanShifted: '#', },
    { code: 'Digit4'       , german: '4' , germanShifted: 'ç' , korean: '4',  koreanShifted: '$', },
    { code: 'Digit5'       , german: '5' , germanShifted: '%' , korean: '5',  koreanShifted: '%', },
    { code: 'Digit6'       , german: '6' , germanShifted: '&' , korean: '6',  koreanShifted: '^', },
    { code: 'Digit7'       , german: '7' , germanShifted: '/' , korean: '7',  koreanShifted: '&', },
    { code: 'Digit8'       , german: '8' , germanShifted: '(' , korean: '8',  koreanShifted: '*', },
    { code: 'Digit9'       , german: '9' , germanShifted: ')' , korean: '9',  koreanShifted: '(', },
    { code: 'Digit0'       , german: '0' , germanShifted: '=' , korean: '0',  koreanShifted: ')', },
    { code: 'Minus'        , german: '\'', germanShifted: '?',  korean: '-',  koreanShifted: '_', },
    { code: 'Equal'        , german: '^' , germanShifted: '`' , korean: '=',  koreanShifted: '+', },
    { code: 'KeyQ'         , german: 'q' , germanShifted: 'Q' , korean: 'ㅂ', koreanShifted: 'ㅃ', },
    { code: 'KeyW'         , german: 'w' , germanShifted: 'W' , korean: 'ㅈ', koreanShifted: 'ㅉ', },
    { code: 'KeyE'         , german: 'e' , germanShifted: 'E' , korean: 'ㄷ', koreanShifted: 'ㄸ', },
    { code: 'KeyR'         , german: 'r' , germanShifted: 'R' , korean: 'ㄱ', koreanShifted: 'ㄲ', },
    { code: 'KeyT'         , german: 't' , germanShifted: 'T' , korean: 'ㅅ', koreanShifted: 'ㅆ', },
    { code: 'KeyY'         , german: 'z' , germanShifted: 'Z' , korean: 'ㅛ', koreanShifted: 'ㅛ', },
    { code: 'KeyU'         , german: 'u' , germanShifted: 'U' , korean: 'ㅕ', koreanShifted: 'ㅕ', },
    { code: 'KeyI'         , german: 'i' , germanShifted: 'I' , korean: 'ㅑ', koreanShifted: 'ㅑ', },
    { code: 'KeyO'         , german: 'o' , germanShifted: 'O' , korean: 'ㅐ', koreanShifted: 'ㅒ', },
    { code: 'KeyP'         , german: 'p' , germanShifted: 'P' , korean: 'ㅔ', koreanShifted: 'ㅖ', },
    { code: 'BracketLeft'  , german: 'ü' , germanShifted: 'è' , korean: '[',  koreanShifted: '{', },
    { code: 'BracketRight' , german: '¨' , germanShifted: '!' , korean: ']',  koreanShifted: '}', },
    { code: 'Backslash'    , german: '$' , germanShifted: '£' , korean: '\\', koreanShifted: '|', },
  ];

  return (
    <div>
      Selected Language: {language}
      <div className={styles.keyboard}>
        {/* Function Keys */}
        <div className="flex">
          <FnKeys />
        </div>
        {/* Number Keys */}
        <div className="flex">
          {keyboardLayout.slice(0, 1).map((key, index) => (
            <div
              key={index}
              onClick={() => onClick(key)}
              className={`${styles.key} h-11 w-[47px] rounded-md`}
            >
              {key}
            </div>
          ))}
          {keyboardLayout.slice(1, 13).map((key, index) => (
            <Key
              key={index}
              value={key}
              onClick={() => onClick(key)}
              className={`${styles.key}`}
            />
          ))}
          <div
            onClick={() => onClick('Backspace')}
            className={`${styles.key} flex w-20 flex-row-reverse items-end rounded-md pb-1 pr-1.5`}
          >
            <MdOutlineBackspace size="15" />
          </div>
        </div>

        {/* Second row */}
        <div className="flex">
          <div
            onClick={() => onClick('Tab')}
            className={`${styles.key} w-24 rounded-md`}
          >
            tab
          </div>
          {keyboardLayout.slice(13, 26).map((key, index) => (
            <Key
              key={index}
              value={key}
              onClick={() => onClick(key)}
              className={`${styles.key}`}
            />
          ))}
        </div>

        <div className="flex">
          <div className={`${styles.key} w-24 rounded-md`}>capslock</div>
          {keyboardLayout.slice(26, 37).map((key, index) => (
            <Key
              key={index}
              value={key}
              onClick={() => onClick(key)}
              className={`${styles.key}`}
            />
          ))}
          <div
            onClick={() => onClick('Enter')}
            className={`${styles.key} w-[86px] rounded-md`}
          >
            Enter
          </div>
        </div>
        <div className="flex">
          <div
            onClick={onShiftClick}
            className={`${styles.key} w-[86px] rounded-md`}
          >
            shift
          </div>
          {keyboardLayout.slice(37, 48).map((key, index) => (
            <Key
              key={index}
              value={key}
              onClick={() => onClick(key)}
              className={`${styles.key} w-[47px] rounded-md`}
            />
          ))}
          <div
            onClick={onShiftClick}
            className={`${styles.key} w-24 rounded-md`}
          >
            shift
          </div>
        </div>

        <div className="flex">
          <div
            className={`${styles.key}  w-[60px] rounded-bl-[22px] rounded-br-md rounded-tl-md rounded-tr-md`}
          >
            control
          </div>
          <div className={`${styles.key}  w-[47px] rounded-md`}></div>
          <div className={`${styles.key} w-[47px] rounded-md`}></div>
          <div className={`${styles.key} h-11 w-16 rounded-md`}></div>
          <div
            onClick={() => onClick(' ')}
            className={`${styles.key} w-[300px] rounded-md`}
          ></div>
          <div className={`${styles.key} w-16 rounded-md`}></div>
          <div className={`${styles.key} w-[47px] rounded-md`}></div>
          <div className={`${styles.key} w-[47px] rounded-md`}></div>
          <div
            className={`${styles.key} w-[60px] rounded-bl-md rounded-br-[22px] rounded-tl-md rounded-tr-md`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Keys;
