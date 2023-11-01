import type { Metadata } from 'next'
import "../components/globals.css"
import Image from 'next/image'
import Link from 'next/link'
import { AppBar, Toolbar, Box, Stack, Button, Typography } from '@mui/material'

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
        <AppBar className='relative bg-gray-100' position="relative">
          <Toolbar className='justify-center'>
            <Image alt='teste' src='/home/logo1.svg' height="300" width="300" />
          </Toolbar>
          <Box className='justify-center flex'>
            <Stack className='flex-row justify-between w-9/12'>
              <Link href=''>
                <Button>Home</Button>
              </Link>
              <Link href=''>
                <Button>Galeria</Button>
              </Link>
              <Link href=''>
                <Button>Eventos</Button>
              </Link>
              <Link href=''>
                <Button>Contato</Button>
              </Link>
            </Stack>
          </Box>
        </AppBar>
        {children}
        <Box className='relative w-full bg-gray-800' position="relative">
          <Box className='justify-center flex-col'>
            <Box className=' justify-between'>
              <button>
                <Typography className="text-2xl">
                  Instagram
                </Typography>
              </button>
              <Link href="https://wa.me/5548991220902?text=Ol%C3%A1%2C+vim+pelo+site%21">
                <button>
                  <Typography className="text-2xl">
                    WhatsApp
                  </Typography>
                </button>
              </Link>
            </Box>
            <Typography className='p-5 text-white'>
              Todos os direitos reservados. ®
            </Typography>
          </Box>
        </Box>
      </body>
    </html>
  )
}