import {useState} from 'react'

function NavBar() {

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Barn Burner
        </a>
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
            <li className="nav-item" onClick={() => setSelectedIndex(0)}>
              <a className={selectedIndex === 0 ? "nav-link active": "nav-link"} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedIndex(1)}>
              <a className={selectedIndex === 1 ? "nav-link active": "nav-link"} href="#">
                Releases
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedIndex(2)}>
              <a className={selectedIndex === 2 ? "nav-link active": "nav-link"} href="#">
                Devlogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
