import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#!">
        Start Bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              About
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/shop">
              Shop
            </a>
          </li> */}
           
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/chitiet">
              Chi tiet
            </a>
          </li>
            
          <li>
            <Link to="/contact">Contact</Link>
          </li>
            
          
        </ul>
      </div>
    </div>
  </nav>


      </div>
    );
  }
}

export default Header;