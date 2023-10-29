'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { Fade, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

interface GAboutContainerProps {
  text: string;
  imgSrc: string;
  alt: string;
  classname: string;
}

export function GAboutContainer({ text, imgSrc, alt, classname }: GAboutContainerProps) {
  const [marginTop, setMarginTop] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setMarginTop(-200); // Defina a margem superior inicial desejada (negativa para mover de baixo para cima)
      }, 1000); // Ajuste o valor do timeout (em milissegundos) para suavizar ainda mais a animação
    }
  }, [inView]);

  const containerStyle = {
    transform: `translateY(${marginTop}px)`,
    transition: 'transform 1.5s ease-in-out',
  };

  return (
    <div
      ref={ref}
      className={`animated-container transition-opacity ease-in-out ${inView ? 'translate-y-0' : 'translate-y-96'}`}
      style={containerStyle}
    >
      <Fade in={inView} timeout={1000}>
        <div className="bg-black absolute">
          <div className="pb-10 flex justify-center items-center bg-black">
            <div className="flex columns-2 w-9/12">
              <div className="my-auto">
                <Typography className="text-white align-middle">{text}</Typography>
              </div>
              <div className="w-full">
                <Image
                  quality={100}
                  sizes="100vw"
                  alt={alt}
                  src={imgSrc}
                  width={0}
                  height={0}
                  className={classname}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center bg-black'>
            <div className='flex w-9/12 justify-start'>
              <button className="self-start font-sans font-semibold text-white bg-gray-600 border-none rounded-md cursor-pointer max-w-40 min-w-24 w-40 hover:text-gray-400">
                Orçamento
              </button>
            </div>
          </div>
        </div>

      </Fade>
    </div>
  );
}
