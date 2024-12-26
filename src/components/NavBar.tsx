import {useState} from 'react'
import { Link } from 'react-router-dom';

function NavBar() {

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={() => setSelectedIndex(0)}>
          Barn Burner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => setSelectedIndex(1)}>
              <Link className={selectedIndex === 1 ? "nav-link active": "nav-link"} to="/releases">
                Releases
              </Link>
            </li>
            <li className="nav-item" onClick={() => setSelectedIndex(2)}>
              <Link className={selectedIndex === 2 ? "nav-link active": "nav-link"} to="/devlogs">
                Devlogs
              </Link>
            </li>
            <li className="nav-item" onClick={() => setSelectedIndex(3)}>
              <Link className={selectedIndex === 3 ? "nav-link active": "nav-link"} to="/feedback">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
