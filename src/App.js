import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import Footer from './components/Footer'
import groceriesImage from './images/neonbrand-9m2RZvHS_cU-unsplash.jpg'
import businessImage from './images/clay-banks-c2a0TydMlAs-unsplash.jpg'
import './App.css';

function App() {
  const BACKGROUNDS = [groceriesImage,businessImage];
  const PAGE_MODES = ['shopper','business']
  const [mode,setMode] = useState(PAGE_MODES[0])
  
  const handleModeSwitch = () => {
    const newMode = (mode === PAGE_MODES[0] ? PAGE_MODES[1] : PAGE_MODES[0])
    setMode(newMode)
  }

  return (
    <div className="app" style={{background: "black"}}>
      <Header />
      <main 
        style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${mode === 'shopper' ? BACKGROUNDS[0] : BACKGROUNDS[1]}`}} 
        className='app__mainContainer'
      >
        <Navbar mode={mode} toggleMode={handleModeSwitch} />
        <Container>
          <HomePage mode={mode} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
