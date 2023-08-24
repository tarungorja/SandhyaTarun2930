import React from 'react';
import { NavLink } from 'react-router-dom';
import './1Components.css';
import image from '../Images/nav.png';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        fontFamily: 'Papyrus',
        backgroundImage: `url(${image})`,
        backgroundSize: '100dvw',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" style={{ fontWeight: 'bolder' }}>
          ❤️For the Love of My Life❤️
        </a>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className=" navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="navlink nav-item" to="/">
              Home |
            </NavLink>
            <NavLink className="navlink nav-item" to="/pic_of_the_Day">
              Pic_of_the_Day |
            </NavLink>
            <NavLink className="navlink nav-item" to="/letters">
              Letters
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
