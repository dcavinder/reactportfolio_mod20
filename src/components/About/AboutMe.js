import React from 'react'
import Grid from '@mui/material/Grid';
import dcavinder from '../../assets/images/dcavinder.jpeg'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material';

const aboutMe = () => {
  return (
    <div >
        <Grid justifyContent='left' container padding={2} spacing={2} >
            <Grid item md={2}></Grid>
            <Grid item xs={12} md={3} >
            <Avatar alt="Image of Danielle Cavinder" src={dcavinder} sx={{width:1, height: 1}}></Avatar>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={4} >
                <Typography>
                    Danielle is a motivated full stack software developer. 
                    She granduated in 2019 from the Pamella Roland Devos 
                    School of Fashion of Kendall College of Art and Design; 
                    earning a Bachelor of Fine Art specializing in Fashion Studies. 
                    Danielle changed career paths and in 2023 granduated from the 
                    University of Denver with a Web Development Certifcate. She plans
                    to also graduate with a Masters of Business Administration from 
                    Western Governors University in 2023. Her passion for art, 
                    creative problem solving, and user experience is what lead her 
                    to pursue a career in software development. She hopes to utilize 
                    her unique education background to provide simple solutions to 
                    complex problems while delivering seemless aethetics.
                </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default aboutMe
