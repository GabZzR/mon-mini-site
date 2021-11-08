import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100" />
      <h2>Header</h2>
      </header>
      <section>
        <h1>Contenu</h1>
        <button type="button" class="btn btn-danger">Danger</button>
        </section>
        <footer>
          <h2>Footer</h2>
        </footer>
    </div>
  );
}

export default App;
