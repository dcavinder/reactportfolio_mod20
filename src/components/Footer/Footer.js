import React from 'react'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
     <Grid container spacing={3} padding={2} justifyContent="Center">
     <IconButton aria-label="GitHub">
            <a href='https://github.com/dcavinder'>
            <GitHubIcon/>
            </a>
        </IconButton>
        <IconButton aria-label="share">
            <a href='https://www.linkedin.com/in/danielle-cavinder-4a5862179/'>
            <LinkedInIcon />
            </a>
        </IconButton>
     </Grid>
    </div>
  )
}

export default Footer
