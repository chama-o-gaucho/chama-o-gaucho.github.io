import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionItem {
  title: string;
  content: string;
}

interface GAccordionProps {
  items: AccordionItem[];
}

export default function GAccordion({ items }: GAccordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1'); // Define 'panel1' como aberto por padrão

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {items.map((item, index) => (

        <Accordion
          className="border border-white bg-black"
          sx={{ maxWidth: '550px' }}
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            className="text-white"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, .03)',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography className=" ml-12 text-4xl text-white">
              {item.title}
            </Typography>
            <ExpandMoreIcon
              sx={{
                color: 'white',
                order: -1,
                marginLeft: -1,
                transition: 'transform 0.3s ease', // Adiciona a transição de animação
                transform: expanded === `panel${index + 1}` ? 'rotate(180deg)' : 'rotate(0deg', // Aplica a rotação
              }}
            />
          </AccordionSummary>
          <AccordionDetails style={{ maxWidth: '800px' }}>
            <Typography className="text-white text-left text-2xl">
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
