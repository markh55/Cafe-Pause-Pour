import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../components/Responsive.css";
import "./Menu.css";

function Menu() {
  const hotDrinks = [
    {
      name: "Latte",
      description: "Smooth espresso with steamed milk",
      price: "4.00",
    },
    {
      name: "Flat White",
      description: "A short, intense espresso with velvety milk",
      price: "3.00",
    },
    {
      name: "Cappuccino",
      description: "Espresso with frothy milk and chocolate dusting",
      price: "3.50",
    },
    {
      name: "Americano",
      description: "Espresso with hot water",
      price: "3.00",
    },
    {
      name: "Espresso",
      description: "A strong, concentrated shot of coffee",
      price: "2.50",
    },
    {
      name: "Mocha",
      description: "Espresso, chocolate, steamed milk",
      price: "4.00",
    },
  ];

  const coldDrinks = [
    {
      name: "Iced Latte",
      description: "Chilled espresso with milk & ice",
      price: "4.00",
    },
    {
      name: "Iced Americano",
      description: "Chilled espresso with water & ice",
      price: "3.00",
    },
    {
      name: "Cold Brew",
      description: "Smooth, slow-steeped cold coffee",
      price: "3.50",
    },
    {
      name: "Iced Tea",
      description: "Refreshing, brewed tea over ice",
      price: "3.00",
    },
  ];

  const pastries = [
    {
      name: "Croissant",
      description: "Buttery and flaky French pastry",
      price: "2.50",
    },
    {
      name: "Blueberry Muffin",
      description: "Moist muffin with juicy blueberries",
      price: "3.00",
    },
    {
      name: "Pain au Chocolat",
      description: "Flaky croissant filled with chocolate",
      price: "3.00",
    },
    {
      name: "Blueberry Muffin",
      description: "Moist muffin with juicy blueberries",
      price: "2.50",
    },
  ];

  const MenuItem = ({ name, description, price }) => (
    <div className="menu-item">
      <div className="menu-item-info">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
      </div>
      <span className="menu-item-price">£ {price}</span>
    </div>
  );

  const MenuSection = ({ title, items, className = "" }) => (
    <section className={`menu-section ${className}`}>
      <h2 className="menu-section-title">{title}</h2>
      <div className="menu-items">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="menu-page">
      <Navbar />

      <section className="menu-hero">
        <h1 className="menu-hero-title">Menu</h1>
        <p className="menu-hero-subtitle">Freshly brewed & made to order</p>
      </section>

      <div className="menu-container">
        <MenuSection title="Hot Drinks" items={hotDrinks} />
        <MenuSection title="Cold Drinks" items={coldDrinks} />
        <MenuSection
          title="Pastries"
          items={pastries}
          className="pastries-section"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Menu;
