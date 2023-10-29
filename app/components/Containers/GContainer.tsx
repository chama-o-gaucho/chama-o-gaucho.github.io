'use client';

import { ReactNode } from "react";

export interface GContainProps {
  children: ReactNode
}

export function GContainer({ children }: GContainProps) {
  return (
    <div className="bg-black bg-cover h-835 flex text-center items-center justify-center w-full pt-40">
      {children}
    </div >
  );
}
