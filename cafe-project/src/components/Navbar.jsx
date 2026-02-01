import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
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
    </nav>
  );
}

export default Navbar;
