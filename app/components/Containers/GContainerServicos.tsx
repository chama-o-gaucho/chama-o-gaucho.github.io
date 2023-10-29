import React, { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from '@mui/material';

export interface GContainerServicosProps {
  children: ReactNode;
}

export function GContainerServicos({ children }: GContainerServicosProps) {
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
      className={`  animated-container transition-opacity ease-in-out ${inView ? 'translate-y-0' : 'translate-y-96'}`}
      style={containerStyle}
    >
      <Fade in={inView} timeout={1000}>
        <div>
          {children}
        </div>
      </Fade>
    </div>
  );
}
