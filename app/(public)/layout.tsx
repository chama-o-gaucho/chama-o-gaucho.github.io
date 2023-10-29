import type { Metadata } from 'next'
import "../components/globals.css"
import { GbuttonContained } from '../components/Buttons/GButtonContained'
import { GbuttonText } from '../components/Buttons/GButtonText'
import { GbuttonTextHover } from '../components/Buttons/GButtonTextHover'
import { GContainerMenu } from '../components/Containers/GContainerMenu'
import { GContainerMenuOptions } from '../components/Containers/GContainerMenuOptions'
import Image from 'next/image'
import { GAboutContainer } from '../components/Containers/GAboutContainer'
import { GContainerFooter } from '../components/Containers/GContainerFooter'
import { GText } from '../components/Typography/GText'
import Link from 'next/link'
import { GContainerDepoiments } from '../components/Containers/GContainerDepoiments'
import { GDepoiment } from '../components/GDepoiment'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body >
        <GContainerMenu>
          <Image alt='teste' src='/home/logo.png' height="45" width="45" />
          <GContainerMenuOptions>
            <Link href="/">
              <GbuttonText textButton='HOME' />
            </Link>
            <GbuttonTextHover textButton='PORTIFÓLIO' />
            <GbuttonContained textButton='CONTATO' />
          </GContainerMenuOptions>
        </GContainerMenu>

        {children}








        <div className=' flex bg-black w-auto' style={{ height: '500px' }} >
        </div>




        <div className='bg-black' style={{ height: '100px' }}></div>
        <div className='pt-44 w-full bg-black' >
          <GContainerFooter />
          <GText className='p-5 text-white bg-black text-center' text='Todos os direitos reservados. ®' />
        </div>

      </body>
    </html>
  )
}
