import { Fade } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { easing } from "@mui/material/styles";

export interface GContainerContentProps {
  children: ReactNode
}

export function GContainerContent({ children }: GContainerContentProps) {
  const [marginTop, setmarginTop] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setmarginTop(0);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-auto absolute bg-black mt-64">
      <Fade in={true} timeout={1000}>
        <div className="relative text-gray-500 font-inter-tight font-semibold text-3xl leading-58 flex flex-col items-center gap-20 mt20 text-center h-400">
          <div
            style={{
              marginTop,
              transition: `margin-top 600ms ${easing.easeInOut}`,
            }}
          >
            {children}
          </div>
        </div >
      </Fade>
    </div>

  );
}
