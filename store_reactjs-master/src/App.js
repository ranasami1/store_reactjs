import "./App.css";
import Allproducts from "./pages/allproducts/products";
import Head from "./pages/home/Home";
import { createContext, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/footer/footer";
import { useState, useEffect } from "react";

export const AppContext = createContext();

function App() {
  const [value, setValue] = useState([]);
  const [cat, setCat] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const getall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setValue(data));
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
  useEffect(() => {
    getall();
    getcat();
  }, []);
  return (
    <>
      <AppContext.Provider
        value={{
          cat,
          value,
          filter,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Head />}></Route>
          <Route path="/products" element={<Allproducts />}></Route>
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
