import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ one }) {
  let [cartData,setCardData] = useState(JSON.parse(localStorage.getItem("cartData"))||{length:0})
  
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Furni<span>.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li
                className={`nav-item ${one["highlight"] == "home" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${one["highlight"] == "shop" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li
                className={`nav-item ${one["highlight"] == "about" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li
                className={`nav-item ${one["highlight"] == "service" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li
                className={`nav-item ${one["highlight"] == "blog" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li
                className={`nav-item ${one["highlight"] == "contact" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link className="nav-link" to="">
                  <img src="images/user.svg" />
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/cart">
                  <a href="#" className="position-relative me-4 my-auto">
                    <img src="images/cart.svg" />
                    <span
                      className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                      style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                    >
                      {cartData.length}
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
