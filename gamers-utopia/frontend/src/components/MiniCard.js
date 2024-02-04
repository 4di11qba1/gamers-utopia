import { Card, CardMedia, ListItemText } from '@mui/material';
import { Star } from '@mui/icons-material';
import React from 'react';
import { darkTheme } from './Theme';

function MiniCard({ item }) {
  return (
    <Card className='hoverableElement' sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, padding: '15px', borderRadius: '5px', width: '400px', position: 'relative' }}>
      <div style={{ display: 'flex', gap: '15px' }}>
        <CardMedia
          component="img"
          alt={item.title}
          image={item.img}
          sx={{ width: '100px', height: '100px', borderRadius: '15px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <ListItemText
            primary={item.title}
            secondary={item.rating}
          />
          <Star sx={{transform: 'translate(22px, -52.25px)', width: '15px', height: '15px'}} />
          <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}>
            <p style={{ fontSize: '10px', backgroundColor: darkTheme.palette.background.paper, padding: '5px', borderRadius: '5px' }}>{item.genre}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MiniCard;
