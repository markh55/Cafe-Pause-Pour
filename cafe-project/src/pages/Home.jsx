import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "./Main.css";
import "../components/Responsive.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <section className="hero">
        <img src="/Cafe.png" alt="Cafe" />
        <h1 className="hero-title">
          Pause &amp; Pour
          <br />
          <span className="hero-title-cafe">Cafe</span>
          <button className="order-button">Order Now</button>
        </h1>
      </section>
      <section className="about-us">
        <div className="about-us-content">
          <h2 className="about-us-header">About Us</h2>
          <p className="about-us-tagline">
            At Pause &amp; Pour Cafe, we believe its more than just a drink its
            a moment.
          </p>
          <br />
          <ul className="about-us-list">
            <li>
              <strong>Warm &amp; Cosy</strong>
            </li>
            <li>
              <strong>Free Wi-Fi</strong>
            </li>
            <li>
              <strong>Quick &amp; Friendly Service</strong>
            </li>
          </ul>
        </div>
        <div className="about-us-image">
          <img src="./CoffeeCups.jpg" alt="Coffee cups" />
        </div>
      </section>
      <section className="featured-items">
        <h2 className="featured-items-header">Most Popular Menu Items</h2>
        <div className="featured-items-list">
          <div className="featured-item">
            <h3>Latte - £4.00</h3>
            <p>
              Our signature blend espresso with steamed milk for a smooth and
              creamy coffee.
            </p>
            <img src="/latte.jpg" alt="Latte" />
          </div>
          <div className="featured-item">
            <img src="./flatwhite.jpg" alt="Flat White" />
            <h3>Flat White - £3.00</h3>
            <p>
              A short but intense espresso, expertly combined with sweet
              textured milk for a rich and velvety coffee.
            </p>
            <br />
            <button>View Menu</button>
          </div>
          <div className="featured-item">
            <h3>Cappuccino - £3.50</h3>
            <p>
              Perfectly extracted espresso capped with luxurious frothy milk,
              finished with a chocolatey dusting.
            </p>
            <img src="/cappuccino.jpg" alt="Cappuccino" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
