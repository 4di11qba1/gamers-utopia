import React from 'react'
import './VerticalCard.css'
import { ListItemText } from '@mui/material'
import { Star } from '@mui/icons-material'
import { darkTheme } from '../Theme'

function VerticalCard({item}) {
  return (
    <div className="vertical-card" style={{backgroundImage: `url(${item.img})`}}>
        <div className="vertical-card-content">
            <ListItemText
                primary={item.title}
                secondary={item.genre}
            />
        </div>
        <div className="vertical-card-genre" style={{backgroundColor: darkTheme.palette.background.paper}}>{item.rating} <Star sx={{width: '12px', height: '12px', transform: 'translateY(1.5px)'}} /></div>
    </div>
  )
}

export default VerticalCard