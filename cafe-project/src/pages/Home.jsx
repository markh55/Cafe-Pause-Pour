import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "./Main.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <h1>Pause & Pour Cafe</h1>
      <Footer />
    </div>
  );
}

export default Home;
