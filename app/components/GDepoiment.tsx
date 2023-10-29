'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography, IconButton, SvgIcon } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import depoimentIcon from '../../public/home/depoimentsicon.svg'




type Depoiment = {
  depoimenttext: string;
  depoimentalt: string;
  depoimentsrc: string;
};

type DepoimentsProps = {
  depoiments: Depoiment[];
};

export const GDepoiment = ({ depoiments, currentIndex }: DepoimentsProps & { currentIndex: number }) => {
  const [currentIndexState, setCurrentIndex] = useState<number>(currentIndex || 0);
  const [isPaused, setPaused] = useState(false);

  const nextDepoiment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === depoiments.length - 1 ? 0 : prevIndex + 1));
  };

  const prevDepoiment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? depoiments.length - 1 : prevIndex - 1));
  };

  const autoNextDepoiment = () => {
    if (!isPaused) {
      nextDepoiment();
    }
  };


  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  useEffect(() => {
    const interval = setInterval(autoNextDepoiment, 3000);
    return () => clearInterval(interval);
  }, [autoNextDepoiment, currentIndexState, isPaused]);

  return (
    <div className=" bg-black h-auto pt-20 flex justify-center items-center" >
      <div className=" bg-black flex columns-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <IconButton
          className=' self-start p-5'
          onClick={prevDepoiment}
          color="default"
          sx={{
            display: 'flex',
            color: 'white',
            '&:hover': {
              color: 'gray',
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="flex flex-col items-center space-x-4" style={{ maxWidth: '550px', alignItems: 'flex-start' }}>
          <div className="relative flex flex-col items-center space-x-4" style={{ width: '550px', height: '165px', alignItems: 'flex-start' }}>
            <Typography className="rounded-3xl text-black bg-white text-center" style={{ wordWrap: 'break-word', maxWidth: '100%', border: '1px solid white', padding: '10px 20px' }}>{depoiments[currentIndexState].depoimenttext}</Typography>
            <div className='relative'>
              <svg className='self-center absolute' style={{ left: '258px' }} xmlns={depoimentIcon} width="80" height="120" viewBox="0 0 80 120">
                <path fill="white" d="M0 0 L10 20 L20 0 Z" />
              </svg>
              <Image
                style={{ alignSelf: 'center', left: '220px', marginTop: '45px' }}
                alt={depoiments[currentIndexState].depoimentalt}
                src={depoiments[currentIndexState].depoimentsrc}
                width={0}
                height={0}
                className="w-24 rounded-full h-24 relative"
                quality={100}
                sizes="100vw"
              />
            </div>
          </div>

        </div>
        <IconButton
          className=' self-start p-5'
          onClick={nextDepoiment}
          color="default"
          sx={{
            color: 'white',
            '&:hover': {
              color: 'gray',
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div >



  );
};