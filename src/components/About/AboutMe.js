import React from 'react'
import Grid from '@mui/material/Grid';
import dcavphoto from '../../assets/images/dcavphoto.jpg'
import Avatar from '@mui/material/Avatar'


const aboutMe = () => {
  return (
    <div>
        <Grid justifyContent='left' container padding={2} spacing={2} >
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={4} >
            <Avatar alt="Image of Danielle Cavinder" src={dcavphoto} sx={{width:1, height: 1}}></Avatar>
            </Grid>
            <Grid item xs={12} md={4}>Danielle Cavinder</Grid>
        </Grid>
    </div>
  )
}

export default aboutMe
