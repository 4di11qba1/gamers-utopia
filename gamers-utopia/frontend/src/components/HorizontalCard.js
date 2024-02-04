import { Card, CardMedia, IconButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import GameRating from './GameRating'
import MyButton from './MyButton/MyButton';
import { Delete } from '@mui/icons-material';

function HorizontalCard({ item }) {
  return (
    <Card className='hoverableElement' sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        flexGrow: 1,
        borderRadius: '10px', 
        position: 'relative', 
        backgroundImage: `url(${item.img})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
        textShadow: '4px 4px 8px #000000'
    }}>
        <div style={{width: '100%', height: '100%', backdropFilter: 'blur(5px)', padding: '15px'}}>
            <div style={{ display: 'flex', gap: '15px' }}>
                <CardMedia
                    component="img"
                    alt={item.title}
                    image={item.img}
                    sx={{ width: '300px', height: '200px', borderRadius: '15px' }}
                />
                <div style={{position: 'absolute', right: '40px', top: '40px'}}>
                    <IconButton>
                        <Delete />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: '200px', padding: '25px' }}>
                    <ListItemText
                        primary={item.title}
                        secondary={item.genre}
                    />
                    <GameRating ratingValue={item.rating} />
                    <Typography component='div' variant='p' fontWeight={'bold'}>
                        Release Date: {item.release}
                    </Typography>
                    <div style={{ position: 'absolute', bottom: '40px', right: '40px' }}>
                        <MyButton text={'Check Now'} bgColor={item.bgColor} w={'150px'} h={'50px'} />
                    </div>
                </div>
            </div>
        </div>
    </Card>
  );
}

export default HorizontalCard;
