import styles from './styles.module.css';
import React from 'react';
import Key from './Key';

interface KeysProps {
  keyboardLayout: string[];
  onClick: (key: string) => void;
  onShiftClick: () => void;
}

const Keys: React.FC<KeysProps> = ({
  keyboardLayout,
  onClick,
  onShiftClick,
}) => {
  //const specialKeys = ['Tab', 'Lock', 'Shift', '3      ', 'Option', 'Command', 'Space', '7', 'Enter' ]
  const functionKeys = ['f1' , 'f2' , 'f3' , 'f4' , 'f5' , 'f6' , 'f7' , 'f8' , 'f9' , 'f10' , 'f11', 'f12', 'f13'];
  const specialKeys = ['Tab' , 'Lock' , 'Shift' , 'Control' , 'Option' , 'Command' , 'Space' , 'Backspace' , 'Enter' , 'esc', ];

  return (
    <div>
      <div className={styles.keyboard}>
        <div className="flex">
          <Key
            value={specialKeys[9]}
            onClick={() => onClick('')}
            className={`${styles.key} w-20 rounded-tl-[22px] rounded-tr-md rounded-br-md rounded-bl-md`}
          />
          {functionKeys.slice(0, 12).map((value, index) => (
            <Key
              key={index}
              value={value}
              onClick={() => onClick('')}
              className={`${styles.key} w-[47px] rounded-md`}
            />
          ))}
           <Key
            value={functionKeys[12]}
            onClick={() => onClick('')}
            className={`${styles.key} w-[47px] rounded-tr-[22px] rounded-tl-md rounded-br-md rounded-bl-md`}
          />
        </div>
        {/* First row */}
        <div className="flex">
          {keyboardLayout.slice(0, 13).map((key, index) => (
            <Key
              key={index}
              value={key}
              onClick={() => onClick(key)}
              className={`${styles.key} w-[47px] rounded-md`}
            />
          ))}
          <Key
            value={specialKeys[7]}
            onClick={() => onClick('Backspace')}
            className={`${styles.key} w-20 rounded-md`}
          />
        </div>

        {/* Second row */}
        <div className="flex">
          <Key
            value={specialKeys[0]}
            onClick={() => onClick('')}
            className={`${styles.key} w-20 rounded-md`}
          />
          {keyboardLayout.slice(13, 26).map((key, index) => (
            <Key key={index} value={key} onClick={() => onClick(key)} className={`${styles.key} w-[47px] rounded-md`}/>
          ))}
        </div>

        <div className="flex">
          <Key
            value={specialKeys[1]}
            onClick={() => onClick('')}
            className={`${styles.key} w-24 rounded-md`}
          />
          {keyboardLayout.slice(26, 37).map((key, index) => (
            <Key key={index} value={key} onClick={() => onClick(key)} className={`${styles.key} w-[47px] rounded-md`} />
          ))}
          <Key
            value={specialKeys[8]}
            onClick={() => onClick('')}
            className={`${styles.key} w-[86px] rounded-md`}
          />
        </div>
        <div className="flex">
          <Key value={specialKeys[2]} onClick={onShiftClick} className={`${styles.key} w-[86px] rounded-md`} />
          {keyboardLayout.slice(37, 48).map((key, index) => (
            <Key key={index} value={key} onClick={() => onClick(key)} className={`${styles.key} w-[47px] rounded-md`}/>
          ))}
          <Key value={specialKeys[2]} onClick={onShiftClick} className={`${styles.key} w-24 rounded-md`}/>
        </div>
        <div className="flex">
          <Key
            value={specialKeys[3]}
            onClick={() => onClick('')}
            className={`${styles.key}  w-[60px] rounded-bl-[22px] rounded-tr-md rounded-br-md rounded-tl-md`}
          />
          <Key
            value={specialKeys[3]}
            onClick={() => onClick('')}
            className={`${styles.key}  w-[47px] rounded-md`}
          />
          <Key
            value={specialKeys[4]}
            onClick={() => onClick('')}
            className={`${styles.key} w-[47px] rounded-md`}
          />
          <Key
            value={specialKeys[5]}
            onClick={() => onClick('')}
            className={`${styles.key} w-16 rounded-md`}
          />
          <Key
            value={specialKeys[6]}
            onClick={() => onClick(' ')}
            className={`${styles.key} w-[300px] rounded-md`}
          />
          <Key
            value={specialKeys[5]}
            onClick={() => onClick('')}
            className={`${styles.key} w-16 rounded-md`}
          />
          <Key
            value={specialKeys[4]}
            onClick={() => onClick('')}
            className={`${styles.key} w-[47px] rounded-md`}
          />
          <Key
            value={specialKeys[4]}
            onClick={() => onClick('')}
            className={`${styles.key} w-[47px] rounded-md`}
          />
          <Key
            value={specialKeys[3]}
            onClick={() => onClick('')}
            className={`${styles.key} w-[60px] rounded-br-[22px] rounded-tr-md rounded-bl-md rounded-tl-md`}
          />
        </div>
      </div>
    </div>
  );
};

export default Keys;
