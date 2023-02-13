import Header from "./components/Header";
import AppInfo from "./components/AppInfo";
import Meals from "./components/Meals";
import { CartProvider } from "./components/CartContext";
import { useState } from "react";
import Cart from "./components/Cart";
function App() {
  const [cartPop, setCartPop] = useState(false);

  const showCart = () => {
    setCartPop(true);
  };

  const hideCart = () => {
    setCartPop(false);
  };
  return (
    <CartProvider>
      <div style={{ backgroundColor: "black" }}>
        <Header showCart={showCart}></Header>
        <AppInfo></AppInfo>
        <Meals></Meals>
        {cartPop && <Cart hideCart={hideCart} />}
      </div>
    </CartProvider>
  );
}

export default App;
