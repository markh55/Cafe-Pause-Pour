import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "./Main.css";

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
        <h2>About Us</h2>
        <p>
          Welcome to Pause &amp; Pour Cafe, your cozy corner for the finest
          brews and delightful treats. We are passionate about crafting the
          perfect cup of coffee and providing a warm, inviting atmosphere for
          our customers.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
