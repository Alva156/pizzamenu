import "./App.css";
import Pizza from "./pizza.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Menu from "./Menu.js";
import pizzaData from "./pizzaData.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
      <Footer />
    </div>
  );
}
