import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Video from './Components/Trailer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trailer from './Components/Trailer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
