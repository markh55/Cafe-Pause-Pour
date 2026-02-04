import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../components/Responsive.css";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-page">
      <Navbar />
      <section className="menu-hero">
        <h1 className="menu-hero-title">Our Menu</h1>
      </section>
      {/* Menu items would go here */}
      <Footer />
    </div>
  );
}

export default Menu;
