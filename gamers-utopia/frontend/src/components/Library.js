import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HorizontalCard from './HorizontalCard';
import { Typography } from '@mui/material';
import Dropdown from './DropDown';

function Library({itemData}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >

        <AnimatePresence>   
        
            <motion.div
                key="libraryBody"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{display: 'flex', flexDirection: 'column', gap: '15px'}}
            >
                <Typography component='div' variant='h5'>
                    Your Wishlist
                </Typography>
                <Typography component='div' variant='p'>
                    All your favorite games are displayed here.
                </Typography>

                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                        <Dropdown text={'Sort By'} />
                        <Dropdown text={'Filters'} />
                </div>

                {itemData.map((item, index) => {
                    return <HorizontalCard key={index} item={item} />
                })}
            </motion.div>
        
        </AnimatePresence>

    </motion.div>
  )
}

export default Library