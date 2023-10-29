'use client';
import Image from 'next/image'
import { GbuttonContained } from '../components/Buttons/GButtonContained';
import { GbuttonText } from '../components/Buttons/GButtonText';
import { GbuttonTextHover } from '../components/Buttons/GButtonTextHover';
import { GTitle } from '../components/Typography/GTitle';
import { GButtonOrca } from '../components/Buttons/GButtonOrca';
import { GMainContainer } from '../components/Containers/GMainContainer';
import { GContainerMenu } from '../components/Containers/GContainerMenu';
import { GContainerMenuOptions } from '../components/Containers/GContainerMenuOptions';
import { GContainer } from '../components/Containers/GContainer';
import { GContainerContent } from '../components/Containers/GContainerContent';
import { RenderElement } from '../components/RenderElement';
import { GContainerServicos } from '../components/Containers/GContainerServicos';
import { GText } from '../components/Typography/GText';
import GAccordion from '../components/GAccordion';
import React, { useEffect, useState } from 'react';
import { GDepoiment } from '../components/GDepoiment';
import { GContainerDepoiments } from '../components/Containers/GContainerDepoiments';
import { GContainerFooter } from '../components/Containers/GContainerFooter';
import { useInView } from 'react-intersection-observer';
import { GAboutContainer } from '../components/Containers/GAboutContainer';
import Link from 'next/link';




export default function Home() {





  return (
    <GMainContainer>

      <GText text='teste chama o gaúcho' />




    </GMainContainer >
  )
}