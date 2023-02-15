import React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

const Contact = () => {
  return (
    <>
        <Grid container justifyContent="center">
            <h2>Contact Me</h2>
        </Grid>
        <Grid container JustifyContent='center' padding={4}>
            <FormControl fullWidth>
                <InputLabel htmlFor="guest-name-input">Name</InputLabel>
                <Input id="guest-name-input"/>
            </FormControl>
        </Grid>
        <Grid container JustifyContent='center' padding={4}>
            <FormControl fullWidth>
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input id="email-input"/>
            </FormControl>
        </Grid>
        <Grid container JustifyContent='center' padding={4}>
            <TextField
            label="Message"
            multiline
            fullWidth
            rows={4}
            />
        </Grid>
    </>    
  )
}

export default Contact
