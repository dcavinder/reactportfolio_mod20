import React from 'react'
import Grid from '@mui/material/Grid';
import dcavresume from '../../assets/resume/dcavresume.png';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from '@mui/material';

function Resume() {
    const dlresume= () => {
        fetch('d_cavinder_resume.pdf').then(response => {
            response.blob().then(blob => {
                const resumeURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = resumeURL;
                alink.download = 'd_cavinder_resume.pdf';
                alink.click();
            })
        })
    }
  return (
    <div>
        <Grid container style={{ background: '#112e0c' }} justifyContent="center">
            <h2 style={{ color: '#ffffff' }}>My Resume</h2>
        </Grid>
        <Grid container justifyContent="center">
        <Grid item padding="10%">
        <img src={dcavresume} alt="Resume" style={{ height: "98%", width: "70%" }}/>
        </Grid>
        <Grid item>
            <IconButton aria-label="download">
                <DownloadIcon onClick={dlresume}/>
            </IconButton>
        </Grid>
        </Grid>
    </div>
  )
}

export default Resume
