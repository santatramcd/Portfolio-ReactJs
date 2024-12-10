import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container py-3">
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a
            href="#"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <i className="bi bi-camera"></i>
            <h1 className="sitename">PhotoFolio</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#" className="active">
                <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a href="#">
                <Link to="/about">About</Link>
                </a>
              </li>
              <li>
                <a href="#">
                <Link to="/contact">Contact</Link>
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <a href="#" className="twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
