import React from 'react'
import { Link } from "react-router-dom";

const Navbar =()=> {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsNexus</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
            {/* <ul>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/in" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  India
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/us">America</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
            </ul> */}
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
