'use client';
export interface GButtonContainedProps {
  textButton: string;
}


export function GbuttonContained({ textButton }: GButtonContainedProps) {
  return (
    <button className="font-sans font-semibold text-white bg-gray-500 border-none rounded-md cursor-pointer max-w-40 min-w-24 w-40 hover:bg-gray-600">
      {textButton}
    </button>
  );
}
