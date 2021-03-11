import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import {Container} from 'react-bootstrap'
import HomePage from './pages/HomePage';
import groceriesImage from './images/neonbrand-9m2RZvHS_cU-unsplash.jpg'

function App() {
  const BACKGROUNDS = [groceriesImage];

  return (
    <div className="app" style={{backgroundImage: `url(${BACKGROUNDS[0]}`}}>
      <Header />
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
