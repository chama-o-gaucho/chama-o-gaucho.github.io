'use client';
import { styled } from 'styled-components';

export interface GButtonTextProps {
  textButton: string;
}



export function GbuttonText({ textButton }: GButtonTextProps) {
  return (
    <button
      className="cursor-pointer bg-transparent border-none max-w-40 min-w-24 w-40"
    >
      <p className=' text-white'>
        {textButton}
      </p>
    </button >
  );
}
