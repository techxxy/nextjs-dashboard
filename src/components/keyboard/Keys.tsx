import styles from './styles.module.css';
import React from 'react';
import Key from './Key';
import FnKeys from './FnKeys';
//import NoKeys from './NoKeys';
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

  const numberKeys = [
    { korean: '~', koreanShifted: '₩' , german: '§',  germanShifted:'°' },
    { korean: '1', koreanShifted: '!' , german: '1',  germanShifted:'+' },
    { korean: '2', koreanShifted: '@' , german: '2',  germanShifted:'"' },
    { korean: '3', koreanShifted: '#' , german: '3',  germanShifted:'*' },
    { korean: '4', koreanShifted: '$' , german: '4',  germanShifted:'ç' },
    { korean: '5', koreanShifted: '%' , german: '5',  germanShifted:'%' },
    { korean: '6', koreanShifted: '^' , german: '6',  germanShifted:'&' },
    { korean: '7', koreanShifted: '&' , german: '7',  germanShifted:'/' },
    { korean: '8', koreanShifted: '*' , german: '8',  germanShifted:'(' },
    { korean: '9', koreanShifted: '(' , german: '9',  germanShifted:')' },
    { korean: '0', koreanShifted: ')' , german: '0',  germanShifted:'=' },
    { korean: '-', koreanShifted: '_' , german: '\'', germanShifted:'?' },
    { korean: '=', koreanShifted: '+' , german: '`',  germanShifted:'`' },
  ];

  const renderNoKeys = () => {
    if (language === 'korean') {
      return numberKeys.map(({ korean, koreanShifted }, index) => (
        <div
          key={index}
          onClick={() => onClick(korean)}
          className={`${styles.key} h-11 w-[47px] items-end rounded-md`}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="mt-1.5 text-[10px] leading-none">
              {koreanShifted}
            </div>
            <div className="text-sm leading-none">{korean}</div>
          </div>
        </div>
      ));
    } else if (language === 'koreanShifted') {
      return numberKeys.map(({korean, koreanShifted}, index) => (
        <div
          key={index}
          onClick={() => onClick(koreanShifted)}
          className={`${styles.key} h-11 w-[47px] items-end rounded-md`}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="mt-1.5 text-[10px] leading-none">
              {koreanShifted}
            </div>
            <div className="text-sm leading-none">{korean}</div>
          </div>
        </div>
      ));
    }else if (language === 'german') {
      return numberKeys.map(({ german, germanShifted}, index) => (
        <div
          key={index}
          onClick={() => onClick(german)}
          className={`${styles.key} h-11 w-[47px] items-end rounded-md`}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="mt-1.5 text-[10px] leading-none">
              {germanShifted}
            </div>
            <div className="text-sm leading-none">{german}</div>
          </div>
        </div>
      ));
    } else if (language === 'germanShifted') {
      return numberKeys.map(({ germanShifted, koreanShifted, korean }, index) => (
        <div
          key={index}
          onClick={() => onClick(germanShifted)}
          className={`${styles.key} h-11 w-[47px] items-end rounded-md`}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="mt-1.5 text-[10px] leading-none">
              {germanShifted}
            </div>
            <div className="text-sm leading-none">{korean}</div>
          </div>
        </div>
      ));
    } else {
      return null;
    }
  };

  

  return (
    <div>
      Selected Language: {language}
      <div className={styles.keyboard}>
        {/* Function Keys */}
        <div className="flex">
          <FnKeys />
        </div>

        {/* Number Keys Testing */}
        <div className="flex">
        {renderNoKeys()}

          <div
            onClick={() => onClick('Backspace')}
            className={`${styles.key} flex w-20 flex-row-reverse items-end rounded-md pb-1 pr-1.5`}
          >
            <MdOutlineBackspace size="15" />
          </div>
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
