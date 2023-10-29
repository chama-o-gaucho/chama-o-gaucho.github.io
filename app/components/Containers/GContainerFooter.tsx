'use client';

import { ReactNode } from "react";
import { GText } from "../Typography/GText";
import Link from "next/link";

export interface GContainerFooterProps {
}

export function GContainerFooter({ }: GContainerFooterProps) {
  return (
    <div className="flex justify-center bg-black pt-28">
      <div className="bg-black w-9/12  flex gap-4 justify-between text-white">
        <button>
          <GText className="text-2xl" text="Instagram" />
        </button>
        <button>
          <GText className="text-2xl" text="Behance" />
        </button>
        <Link href="https://wa.me/5548991220902?text=Ol%C3%A1%2C+vim+pelo+site%21">
          <button>
            <GText className="text-2xl" text="WhatsApp" />
          </button>
        </Link>
        <button>
          <GText className="text-2xl" text="2023. Caxias do Sul – Brasil" />
        </button>
      </div >
    </div >
  );
}
