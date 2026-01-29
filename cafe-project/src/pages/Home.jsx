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
        </h1>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
