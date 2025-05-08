import "./App.css";
import Allproducts from "./pages/allproducts/products";
import Head from "./pages/home/Home";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/footer/footer";
import { useState, useEffect } from "react";
import Cart from "./pages/CartPage/Cart";

export const AppContext = createContext();

function App() {
  const [value, setValue] = useState([]);
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";

  const getall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
        setLoading(false);
      });
  };

  const getcat = () => {
    fetch(`${url}/categories`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  };

  const filter = (catName) => {
    console.log(catName);
    fetch(`${url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setValue(data));
  };

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  function addToCart(product) {
    const productName = product.title;
    const productPrice = product.price;
    const productImage = product.image;

    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productName]) {
        updatedCart[productName].quantity += 1;
        updatedCart[productName].totalPrice += productPrice;
      } else {
        updatedCart[productName] = {
          quantity: 1,
          totalPrice: productPrice,
          image: productImage,
        };
      }
      return updatedCart;
    });
  }
  function updateCartDisplay() {
    const cartList = document.getElementById("cart");
    if (!cartList) return;

    cartList.innerHTML = "";

    for (let product in cartItems.current) {
      const listItem = document.createElement("li");
      listItem.innerText = `${
        cartItems.current[product].image
      } ${product} - Quantity: ${
        cartItems.current[product].quantity
      } - Total: Rs ${cartItems.current[product].totalPrice.toFixed(2)}`;
      cartList.appendChild(listItem);
    }
  }
  function removeFromCart(productName) {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productName]) {
        delete updatedCart[productName];
      }
      return updatedCart;
    });
  }

  useEffect(() => {
    getall();
    getcat();
  }, []);
  return (
    <div className="main-content">
      <AppContext.Provider
        value={{
          cat,
          value,
          cartCount,
          filter,
          addToCart,
          updateCartDisplay,
          removeFromCart,
          cartItems,
          loading,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Head />}></Route>
          <Route path="/products" element={<Allproducts />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
