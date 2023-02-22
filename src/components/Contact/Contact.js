
import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { emailVerify } from '../../email_verification/verify_email.js';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    const [ guestName, setGuestName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ errorAlert, setErrorAlert ] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!guestName) {
            setErrorAlert('Please enter a valid name.');
            return;
        }

        if(!emailVerify(email)) {
            setErrorAlert('Please enter a valid email address.');
            return;
        }

        if(!message) {
            setErrorAlert('Please leave a message.')
            return;
        }
        
        setGuestName('')
        setEmail('')
        setMessage('')
        setErrorAlert('')
    }

  return (
    <>
        <Grid container style={{ background: '#112e0c' }} justifyContent="center">
            <h2 style={{ color: '#ffffff' }}>Contact Me</h2>
        </Grid>
        <Grid container JustifyContent='center' padding={4}>
            <FormControl fullWidth>
                <InputLabel htmlFor="guestName">Name</InputLabel>
                <Input id="guestName" value={setGuestName}/>
            </FormControl>
        </Grid>
        <Grid container JustifyContent='center' padding={4}>
            <FormControl fullWidth>
                <InputLabel htmlFor="emailInput">Email address</InputLabel>
                <Input id="emailInput" value={setEmail}/>
            </FormControl>
        </Grid>
        <Grid container JustifyContent='center' padding={4}>
            <TextField
            value={setMessage}
            label="messageInput"
            multiline
            fullWidth
            rows={4}
            />
            <IconButton aria-label="share">
                <SendIcon style={{ color: '#112e0c' }} onClick={handleFormSubmit}/>
            </IconButton>
        </Grid>
    </>    
  )
}

export default Contact