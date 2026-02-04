import Menu from "./pages/Menu.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const path = window.location.pathname;
  if (path === "/menu") {
    return <Menu />;
  }
  return <Home />;
}

export default App;
