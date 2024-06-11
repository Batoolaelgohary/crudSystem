import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm position-fixed w-100 ">
        <div className="container">
          <div className="navbar-brand">CRUD</div>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active">
                  Welcome to our CRUD system
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
