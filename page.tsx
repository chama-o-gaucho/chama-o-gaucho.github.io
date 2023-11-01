'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Item from '@mui/material/Stack';
import { GGallery } from '../components/GGallery';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}


export default function Album() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const cards: Card[] = [
    {
      id: 1,
      image: '/gallery/2.jpg',
      title: 'Título 1',
      description: 'Descrição 1.',
    },
    {
      id: 2,
      image: '/gallery/3.jpg',
      title: 'Título 2',
      description: 'Descrição 2.',
    },
    {
      id: 3,
      image: '/gallery/4.jpg',
      title: 'Título 3',
      description: 'Descrição 3.',
    },
    // Adicione mais objetos de card conforme necessário
  ];

  const showImageContent = (card: Card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };




  return (
    <>
      <main>
        {/* hero unit */}
        <Box className='pt-2 pb-2'>
          <Container maxWidth="sm">

            <Typography className='pt-10 text-center' variant="h5" paragraph>
              descrição sobre
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* end hero unit */}
          <Typography className='pt-10 text-center' variant="h3" paragraph>
            Galeria
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia component="div" sx={{ pt: '56.25%' }} image={card.image} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent>
                  <Button onClick={() => showImageContent(card)}>Ver</Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          {selectedCard && (
            <Dialog open={Boolean(selectedCard)} onClose={handleCloseModal}>
              <DialogTitle>{selectedCard.title}</DialogTitle>
              <DialogContent sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia component="img" sx={{ maxWidth: '50%' }} image={selectedCard.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {selectedCard.title}
                  </Typography>
                  <Typography>{selectedCard.description}</Typography>
                </CardContent>
              </DialogContent>
            </Dialog>
          )}
        </Container>
      </main>

    </>
  );
}
