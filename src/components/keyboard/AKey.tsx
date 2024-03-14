export function AKey() {
  return (
    <div
      onClick={handleClick}
      className={`w-[47px] ${className} h-11 rounded-md leading-[40px]`}
    >
      {value}
    </div>
  );
}
