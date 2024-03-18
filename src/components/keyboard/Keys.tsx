import React, { useState } from 'react';
import styles from './styles.module.css';
import FnKeys, { OptionKeysL, OptionKeysR } from './FnKeys';
import { MdOutlineBackspace, MdOutlineKeyboardTab } from 'react-icons/md';
import { BsArrowReturnLeft, BsShift, BsGlobe } from 'react-icons/bs';

interface KeysProps {
  keyboardLayout: string[];
  language: string;
  onClick: (key: string) => void;
  onShiftClick: () => void;
  onCapslockClick: () => void;
}

const Keys: React.FC<KeysProps> = ({
  keyboardLayout,
  language,
  onClick,
  onShiftClick,
  onCapslockClick,
}) => {
  const [showCapslock, setShowCapslock] = useState(true);

  const toggleCapslock = () => {
    setShowCapslock(!showCapslock);
  };

  interface LanguageKeys {
    korean: string;
    koreanShifted: string;
    german: string;
    germanShifted: string;
  }

  const keyboardKeys: LanguageKeys[] = [
    { korean: '₩', koreanShifted: '~', german: '§', germanShifted: '°' },
    { korean: '1', koreanShifted: '!', german: '1', germanShifted: '+' },
    { korean: '2', koreanShifted: '@', german: '2', germanShifted: '"' },
    { korean: '3', koreanShifted: '#', german: '3', germanShifted: '*' },
    { korean: '4', koreanShifted: '$', german: '4', germanShifted: 'ç' },
    { korean: '5', koreanShifted: '%', german: '5', germanShifted: '%' },
    { korean: '6', koreanShifted: '^', german: '6', germanShifted: '&' },
    { korean: '7', koreanShifted: '&', german: '7', germanShifted: '/' },
    { korean: '8', koreanShifted: '*', german: '8', germanShifted: '(' },
    { korean: '9', koreanShifted: '(', german: '9', germanShifted: ')' },
    { korean: '0', koreanShifted: ')', german: '0', germanShifted: '=' },
    { korean: '-', koreanShifted: '_', german: "'", germanShifted: '?' },
    { korean: '=', koreanShifted: '+', german: '^', germanShifted: '`' },

    { korean: 'ㅂ', koreanShifted: 'ㅃ', german: 'q', germanShifted: 'Q' },
    { korean: 'ㅈ', koreanShifted: 'ㅉ', german: 'w', germanShifted: 'W' },
    { korean: 'ㄷ', koreanShifted: 'ㄸ', german: 'e', germanShifted: 'E' },
    { korean: 'ㄱ', koreanShifted: 'ㄲ', german: 'r', germanShifted: 'R' },
    { korean: 'ㅅ', koreanShifted: 'ㅆ', german: 't', germanShifted: 'T' },
    { korean: 'ㅛ', koreanShifted: 'ㅛ', german: 'z', germanShifted: 'Z' },
    { korean: 'ㅕ', koreanShifted: 'ㅕ', german: 'u', germanShifted: 'U' },
    { korean: 'ㅑ', koreanShifted: 'ㅑ', german: 'i', germanShifted: 'I' },
    { korean: 'ㅐ', koreanShifted: 'ㅒ', german: 'o', germanShifted: 'O' },
    { korean: 'ㅔ', koreanShifted: 'ㅖ', german: 'p', germanShifted: 'P' },

    { korean: '[', koreanShifted: '{', german: 'ü', germanShifted: 'è' },
    { korean: ']', koreanShifted: '}', german: '¨', germanShifted: '!' },
    { korean: '\\', koreanShifted: '|', german: '$', germanShifted: '£' },

    { korean: 'ㅁ', koreanShifted: 'ㅁ', german: 'a', germanShifted: 'A' },
    { korean: 'ㄴ', koreanShifted: 'ㄴ', german: 's', germanShifted: 'S' },
    { korean: 'ㅇ', koreanShifted: 'ㅇ', german: 'd', germanShifted: 'D' },
    { korean: 'ㄹ', koreanShifted: 'ㄹ', german: 'f', germanShifted: 'F' },
    { korean: 'ㅎ', koreanShifted: 'ㅎ', german: 'g', germanShifted: 'G' },
    { korean: 'ㅗ', koreanShifted: 'ㅗ', german: 'h', germanShifted: 'H' },
    { korean: 'ㅓ', koreanShifted: 'ㅓ', german: 'j', germanShifted: 'J' },
    { korean: 'ㅏ', koreanShifted: 'ㅏ', german: 'k', germanShifted: 'K' },
    { korean: 'ㅣ', koreanShifted: 'ㅣ', german: 'l', germanShifted: 'L' },

    { korean: ';', koreanShifted: ':', german: 'ö', germanShifted: 'é' },
    { korean: "'", koreanShifted: '"', german: 'é', germanShifted: 'à' },

    { korean: 'ㅋ', koreanShifted: 'ㅋ', german: 'y', germanShifted: 'Y' },
    { korean: 'ㅌ', koreanShifted: 'ㅌ', german: 'x', germanShifted: 'X' },
    { korean: 'ㅊ', koreanShifted: 'ㅊ', german: 'c', germanShifted: 'C' },
    { korean: 'ㅍ', koreanShifted: 'ㅍ', german: 'v', germanShifted: 'V' },
    { korean: 'ㅠ', koreanShifted: 'ㅠ', german: 'b', germanShifted: 'B' },
    { korean: 'ㅜ', koreanShifted: 'ㅜ', german: 'n', germanShifted: 'N' },
    { korean: 'ㅡ', koreanShifted: 'ㅡ', german: 'm', germanShifted: 'M' },

    { korean: ',', koreanShifted: '<', german: ',', germanShifted: '<' },
    { korean: '.', koreanShifted: '>', german: '.', germanShifted: '>' },
    { korean: '-', koreanShifted: '_', german: '/', germanShifted: '?' },
  ];



  function sendSelectedKey(clickedKey: LanguageKeys) {
    const correctKey =
      language === 'korean'
        ? clickedKey.korean
        : language === 'german'
        ? clickedKey.german
        : language === 'koreanShifted'
        ? clickedKey.koreanShifted
        : clickedKey.germanShifted;
    onClick(correctKey);
  }

  const NumKeys = ({ start, end }: { start: number; end: number }) => {
    return keyboardKeys.slice(start, end).map((keys, index) => (
      <div
        key={index}
        onClick={() => sendSelectedKey(keys)}
        className={`${styles.key} w-[47px] items-end rounded-md`}
      >
        <div className="flex flex-col items-center gap-1.5">
          <div className="mt-1.5 text-[10px] leading-none">
            {language === 'korean' || language === 'koreanShifted'
              ? keys.koreanShifted
              : keys.germanShifted}
          </div>
          <div className="text-sm leading-none">
            {language === 'korean' || language === 'koreanShifted'
              ? keys.korean
              : keys.german}
          </div>
        </div>
      </div>
    ));
  };

  const SymbolKeys = ({ start, end }: { start: number; end: number }) => {
    return keyboardKeys.slice(start, end).map((keys: LanguageKeys, index) => (
      <div
        key={index}
        onClick={() => sendSelectedKey(keys)}
        className={`${styles.key} w-[47px] items-end rounded-md`}
      >
        <div className="grid grid-cols-1 gap-1 text-[13px] leading-none">
          <div className="mt-[5px]">
            {language === 'korean' || language === 'koreanShifted'
              ? keys.koreanShifted
              : keys.germanShifted}
          </div>
          <div className="mb-1">
            {language === 'korean' || language === 'koreanShifted'
              ? keys.korean
              : keys.german}
          </div>
        </div>
      </div>
    ));
  };

  const CharKeys = ({ start, end }: { start: number; end: number }) => {
    return keyboardKeys.slice(start, end).map((keys: LanguageKeys, index) => (
      <div
        key={index}
        onClick={() => sendSelectedKey(keys)}
        className={`${styles.key} w-[47px] items-end rounded-md`}
      >
        <div className="grid grid-cols-2 gap-1 pt-1.5 text-sm leading-none ">
          <div className="ml-[3px]">
            {keys.korean === keys.koreanShifted ? '' : keys.koreanShifted}
          </div>
          <div className="mr-[3px]">{keys.germanShifted}</div>
          <div className="ml-[3px]">{keys.korean}</div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className={styles.keyboard}>
        {/* Function Keys */}
        <div className="flex">
          <FnKeys />
        </div>
        {/* Number Keys */}
        <div className="flex">
          <SymbolKeys start={0} end={1} />
          <NumKeys start={1} end={11} />
          <SymbolKeys start={11} end={13} />
          <div
            onClick={() => onClick('Backspace')}
            className={`${styles.key} flex w-20 flex-row-reverse items-end rounded-md pb-1 pr-2`}
          >
            <MdOutlineBackspace size="15" />
          </div>
        </div>

        {/* Tab QWE row */}
        <div className="flex">
          <div
            className={`${styles.key} flex w-20 items-end rounded-md pb-1 pl-2 text-xs`}
          >
            <MdOutlineKeyboardTab size="16" />
          </div>
          <CharKeys start={13} end={23} />
          <SymbolKeys start={23} end={26} />
        </div>
        {/* Capslock ASD row */}
        <div className="flex">
          <div
            className={`${styles.key} flex w-24 flex-col items-start rounded-md pl-2`}
            onClick={onCapslockClick}
          >
            <div
              id="capslock"
              className={`${
                language === 'korean'
                  ? styles.capslock
                  : language === 'koreanShifted'
                  ? styles.capslock
                  : ''
              } mb-1 text-[11px]`}
            >
              &#x2022;
            </div>
            <div className="items-end pb-1 text-xs">한/A</div>
          </div>
          <CharKeys start={26} end={35} />
          <SymbolKeys start={35} end={37} />
          <div
            onClick={() => onClick('Enter')}
            className={`${styles.key} flex w-[86px]  flex-row-reverse items-end rounded-md pb-1 pr-2`}
          >
            <BsArrowReturnLeft />
          </div>
        </div>
        {/* Shift YXC row */}

        <div className="flex">
          <div
            onClick={onShiftClick}
            className={`${styles.key} flex w-32 flex-row items-end rounded-md pb-1 pl-2`}
          >
            <BsShift />
          </div>
          <CharKeys start={37} end={44} />
          <SymbolKeys start={44} end={47} />
          <div
            onClick={onShiftClick}
            className={`${styles.key} flex w-28 flex-row-reverse items-end rounded-md pb-1 pr-2`}
          >
            <BsShift />
          </div>
        </div>

        <div className="flex">
          {/* Function Keys */}
          <OptionKeysL />
          <div
            onClick={() => onClick(' ')}
            className={`${styles.key} w-[254px] rounded-md`}
          ></div>
          <OptionKeysR />
        </div>
      </div>
    </div>
  );
};

export default Keys;
