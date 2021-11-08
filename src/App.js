import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer  from './Components/Footer';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <h1>Contenu</h1>
      </section>
      <Footer />
    </div>
  );
}

export default App;
