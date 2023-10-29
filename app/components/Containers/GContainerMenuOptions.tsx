'use client';

import { ReactNode } from "react";

export interface GContainerMenuOptionsProps {
  children: ReactNode
}

export function GContainerMenuOptions({ children }: GContainerMenuOptionsProps) {
  return (
    <div className="flex gap-4 px-100 max-w-560 min-w-330 w-auto "    >
      {children}
    </div >
  );
}
