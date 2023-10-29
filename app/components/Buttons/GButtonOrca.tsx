'use client';

export interface GButtonOrcaProps {
  textButton: string;
}



export function GButtonOrca({ textButton }: GButtonOrcaProps) {
  return (
    <button className=" mt-10 inline font-sans font-semibold text-white bg-teal-500 border-none rounded-md cursor-pointer max-w-60 min-w-24 w-60 hover:bg-teal-600 p-2 text-4xl">
      {textButton}
    </button>
  );
}
