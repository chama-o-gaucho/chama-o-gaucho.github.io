import { Typography, TypographyProps } from '@mui/material';

interface GTitleProps extends TypographyProps {
  text: string;
}

export function GTitle({ text }: GTitleProps) {
  return (
    <Typography sx={{ fontWeight: 'bold', color: 'white' }} variant='h2' >
      {text}
    </Typography>


  );
}
