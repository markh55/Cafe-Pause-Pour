import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo - shows on both mobile and desktop */}
      <div className="navbar-logo">
        <span className="logo-main">Pause & Pour</span>
      </div>

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

      {/* Burger menu for mobile - morphs into X */}
      <button
        className={`burger-menu${isMenuOpen ? " active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Nav Menu - Dropdown */}
      <ul className={`mobile-menu${isMenuOpen ? " active" : ""}`}>
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
