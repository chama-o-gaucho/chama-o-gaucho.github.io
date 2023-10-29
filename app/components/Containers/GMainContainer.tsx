'use client';

import { ReactNode } from "react";

export interface GMainContainerProps {
  children: ReactNode
}

export function GMainContainer({ children }: GMainContainerProps) {
  return (
    <div className=" bg-black inline m-0 p-0 font-sans text-base leading-5 box-border"    >
      {children}
    </div >
  );
}
