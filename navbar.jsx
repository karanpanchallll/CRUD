import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CRUD</a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto"> {/* 'me-auto' keeps it to the left */}
            <li className="nav-item">
              <Link to="/" className="nav-link mx-3">Create</Link> {/* 'mx-3' adds horizontal spacing */}
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link mx-3">All Post</Link> {/* 'mx-3' adds horizontal spacing */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
