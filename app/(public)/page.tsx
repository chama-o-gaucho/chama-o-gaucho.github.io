'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
      image: '/gallery/1.jpg',
      title: 'Título 1',
      description: 'Descrição 1.',
    },
    {
      id: 2,
      image: '/gallery/2.jpg',
      title: 'Título 2',
      description: 'Descrição 2.',
    },
    {
      id: 3,
      image: '/gallery/3.jpg',
      title: 'Título 3',
      description: 'Descrição 3.',
    },
    {
      id: 4,
      image: '/gallery/4.jpg',
      title: 'Título 4',
      description: 'Descrição 4.',
    },
    {
      id: 5,
      image: '/gallery/5.jpg',
      title: 'Título 5',
      description: 'Descrição 5.',
    },
    {
      id: 3,
      image: '/gallery/6.jpg',
      title: 'Título 6',
      description: 'Descrição 6.',
    },
    {
      id: 3,
      image: '/gallery/7.jpg',
      title: 'Título 7',
      description: 'Descrição 7.',
    },
    {
      id: 3,
      image: '/gallery/8.jpg',
      title: 'Título 8',
      description: 'Descrição 8.',
    },
    {
      id: 3,
      image: '/gallery/9.jpg',
      title: 'Título 9',
      description: 'Descrição 9.',
    },
    {
      id: 3,
      image: '/gallery/10.jpg',
      title: 'Título 10',
      description: 'Descrição 10.',
    },
    {
      id: 3,
      image: '/gallery/11.jpg',
      title: 'Título 11',
      description: 'Descrição 11.',
    },
    {
      id: 3,
      image: '/gallery/12.jpg',
      title: 'Título 12',
      description: 'Descrição 12.',
    },
    {
      id: 3,
      image: '/gallery/13.jpg',
      title: 'Título 13',
      description: 'Descrição 13.',
    },
    {
      id: 3,
      image: '/gallery/14.jpg',
      title: 'Título 14',
      description: 'Descrição 14.',
    },
    {
      id: 3,
      image: '/gallery/15.jpg',
      title: 'Título 15',
      description: 'Descrição 15.',
    },
    {
      id: 3,
      image: '/gallery/16.jpg',
      title: 'Título 16',
      description: 'Descrição 16.',
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
              Esta página tem como objetivo mostrar o trabalho do renomado Chef Cozinheiro Cassiano Bilhalva, onde o mesmo vai apresentar a culinária gaúcha, organizar eventos e marcar aulas de culinária. Qualquer dúvida sobre, dê uma olhada na aba contatos ou visualize o Whatsapp e Instagram no final da página.
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
