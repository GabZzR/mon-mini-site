import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer  from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
