import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../images/Image";
import "./style.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="brain refreshing" className="img-fluid" />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggler="collapse"
            data-bs-target="#navbarCollapse"
          >
            <ion-icon name="menu-outline" />
          </button>
          <div className="navbar-collapse collapse" id="navbar-collapse">
            <ul className="navbar-nav ms-auto col-gap-5">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/book">
                  books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
