import React, { useRef, useState, useEffect } from 'react';
import { Fade } from '@mui/material';

export const RenderElement = ({ threshold = 0.5, children }: { threshold?: number, children: () => React.ReactElement }) => {
  const myComponentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPermanentVisible, setIsPermanentVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: threshold,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && !isPermanentVisible) {
        setIsPermanentVisible(true);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    if (myComponentRef.current) {
      observer.observe(myComponentRef.current);
    }

    return () => {
      if (myComponentRef.current) {
        observer.unobserve(myComponentRef.current);
      }
    };
  }, [isPermanentVisible, threshold]);

  return (
    <div ref={myComponentRef}>
      <Fade in={isPermanentVisible} timeout={1000}>
        {children()}
      </Fade>
    </div>
  );
};

