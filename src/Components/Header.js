import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><img src={logo} className="App-logo" alt="logo" width="100" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/trailer">Trailer</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}
export default Header