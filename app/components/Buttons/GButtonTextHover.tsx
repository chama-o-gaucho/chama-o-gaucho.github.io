'use client';
export interface GButtonTextHoverProps {
  textButton: string;
}



export function GbuttonTextHover({ textButton }: GButtonTextHoverProps) {
  return (
    <button className="cursor-pointer bg-transparent border-none max-w-40 min-w-24 w-40">
      <p className="text-gray-400 hover:text-white">
        {textButton}
      </p>
    </button>
  );
}
