'use client';

import { ReactNode } from "react";

export interface GContainerMenuProps {
  children: ReactNode
}

export function GContainerMenu({ children }: GContainerMenuProps) {
  return (
    <div className="bg-black flex gap-4 justify-evenly pt-2 items-center"    >
      {children}
    </div >
  );
}
