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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    id: 1,
    image: 'https://source.unsplash.com/random?wallpapers',
    title: 'Card 1 Title',
    description: 'This is the description for Card 1.',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random?nature',
    title: 'Card 2 Title',
    description: 'This is the description for Card 2.',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random?animals',
    title: 'Card 3 Title',
    description: 'This is the description for Card 3.',
  },
  // Adicione mais objetos de card conforme necessário
];

export default function Album() {
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
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    </>
  );
}
