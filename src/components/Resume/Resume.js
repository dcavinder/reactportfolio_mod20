import React from 'react'
import Grid from '@mui/material/Grid';
import dcavresume from '../../assets/resume/dcavresume.png';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from '@mui/material';

function Resume() {
    const dlresume= () => {
        fetch('d_cavinder_resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
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
        <Grid container xs={12} md={8} xl={6} justifyContent="center">
        <Grid item padding={10}>
        <img src={dcavresume} alt="Resume" style={{ height: "98%", width: "70%" }}/>
        </Grid>
        </Grid>
        <Grid justifyContent="Center">
            <IconButton aria-label="share">
                <DownloadIcon onClick={dlresume}/>
            </IconButton>
        </Grid>
    </div>
  )
}

export default Resume
