import React from 'react';
import styles from './styles.module.css';

import {
  MdFlare,
  MdOutlineWbSunny,
  MdOutlineCalendarViewMonth,
  MdSearch,
  MdMicNone,
  MdOutlineDarkMode,
  MdLockOutline,
  MdKeyboardControlKey,
  MdOutlineKeyboardOptionKey,
  MdKeyboardCommandKey,
} from 'react-icons/md';

import {
  TbPlayerTrackPrev,
  TbPlayerSkipForward,
  TbPlayerTrackNext,
} from 'react-icons/tb';

import { BiVolume } from 'react-icons/bi';
import { GrVolumeLow, GrVolume } from 'react-icons/gr';
import { BsGlobe } from 'react-icons/bs';

import { RxTriangleDown, RxTriangleLeft, RxTriangleRight, RxTriangleUp } from "react-icons/rx";


const functionKeys = [
  { code: 'F1', icon: MdFlare },
  { code: 'F2', icon: MdOutlineWbSunny },
  { code: 'F3', icon: MdOutlineCalendarViewMonth },
  { code: 'F4', icon: MdSearch },
  { code: 'F5', icon: MdMicNone },
  { code: 'F6', icon: MdOutlineDarkMode },
  { code: 'F7', icon: TbPlayerTrackPrev },
  { code: 'F8', icon: TbPlayerSkipForward },
  { code: 'F9', icon: TbPlayerTrackNext },
  { code: 'F10', icon: BiVolume },
  { code: 'F11', icon: GrVolumeLow },
  { code: 'F12', icon: GrVolume },
];

export default function FnKeys() {
  return (
    <>
      <div
        className={`${styles.key} flex w-20 items-end rounded-bl-md rounded-br-md rounded-tl-[20px] rounded-tr-md pb-1 pl-2 text-xs`}
      >
        esc
      </div>
      {functionKeys.map(({ code, icon: Icon }, index) => (
        <div
          key={index}
          className={`${styles.key} flex flex-grow w-[47px] flex-col items-center gap-1.5 rounded-md pt-2`}
        >
          <Icon size="13" />
          <div className="text-[8px]">{code}</div>
        </div>
      ))}
      <div
        className={`${styles.key} flex w-[47px] flex-col items-center rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-[20px] pt-3.5`}
      >
        <MdLockOutline size="13" />
      </div>
    </>
  );
}

const optionKeys = [
  { code: 'fn', icon: BsGlobe },
  { code: 'control', icon: MdKeyboardControlKey },
  { code: 'option', icon: MdOutlineKeyboardOptionKey },
  { code: 'command', icon: MdKeyboardCommandKey },
];

export function OptionKeysL() {
  return (
    <>
      {optionKeys.slice(0, 1).map(({ code, icon: Icon }, index) => (
        <div
          key={index}
          className={`${styles.key} hidden md:flex w-[47px] flex-col gap-1 rounded-bl-[20px] rounded-br-md  rounded-tl-md rounded-tr-md pl-2 py-1`}
        >
          <div className="text-[11px] pl-2">{code}</div>
          <Icon size="13" />
        </div>
      ))}
      {optionKeys.slice(1, 4).map(({ code, icon: Icon }, index) => (
        <div
          key={index}
          className={`${styles.key} hidden md:flex w-fit min-w-[47px] flex-col items-end gap-1 rounded-md px-[7px] py-1 `}
        >
          <Icon />
          <div className=" text-[11px]">{code}</div>
        </div>
      ))}
    </>
  );
}

export function OptionKeysR() {
  return (
    <>
      {[...optionKeys]
        .reverse()
        .slice(0, 2)
        .map(({ code, icon: Icon }, index) => (
          <div
            key={index}
            className={`${styles.key} hidden md:flex flex-col w-fit items-start gap-1 rounded-md px-[7px] py-1 `}
          >
            <Icon />
            <div className=" text-[11px]">{code}</div>
          </div>
        ))}
      <div className={`${styles.key} hidden md:flex w-[47px] rounded-md flex-col items-center pt-3`}>
      <RxTriangleLeft />
      </div>
      <div className='hidden md:grid grid-col-1 mt-[5px] w-[57px] '>
        <div className={`${styles.key} ${styles.arrow} rounded-tl-md rounded-tr-md flex flex-col items-center`}>
        <RxTriangleUp />
          </div>
          <div className={`${styles.key} ${styles.arrow} rounded-bl-md rounded-br-md  flex flex-col items-center`}>
          <RxTriangleDown />
          </div>
      </div>
      <div
        className={`${styles.key} hidden md:flex flex-col w-[47px] items-center rounded-bl-md rounded-br-[22px] rounded-tl-md rounded-tr-md pt-3`}
      ><RxTriangleRight size='16'/></div>
    </>
  );
}
