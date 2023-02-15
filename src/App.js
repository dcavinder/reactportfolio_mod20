import Nav from './components/Nav';
import CssBaseline from '@mui/material/CssBaseline';
import AboutMe from './components/About/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <CssBaseline />
    <Nav />
    <AboutMe />
    <Portfolio />
    <Resume />
    <Contact />
    <Footer />
    </>

  );
}

export default App;
