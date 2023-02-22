import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <CssBaseline enableColorScheme/>
    <Nav/>
    <About/>
    <Portfolio/>
    <Resume/>
    <Contact/>
    <Footer />
    </>

  );
}

export default App;
