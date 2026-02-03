import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define closeMenu to fix ReferenceError
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Desktop Nav Links */}
      <ul className="nav-links desktop-only">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("location");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Location
          </a>
        </li>
      </ul>

      {/* Burger menu for mobile */}
      <button
        className="burger-menu"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Mobile Nav Menu */}
      <ul className={`mobile-menu${isMenuOpen ? " active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          type="button"
        >
          &times;
        </button>
        <li>
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/menu" onClick={closeMenu}>
            Menu
          </a>
        </li>
        <li>
          <a
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              const el = document.getElementById("location");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Location
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
