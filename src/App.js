import './App.css';
import Allproducts from './pages/allproducts/products';
import Head from './pages/home/Home';
import { Fragment } from 'react';
import {Route , Routes} from 'react-router-dom' ;
import CartPage from './pages/cart';
import Header from './component/Header/Header';
import Footer from './component/footer/footer';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
    const addtocart = (card) =>{
        cart.push(card);
        localStorage.setItem("card",JSON.stringify(cart));
       }
  let retrieveData = 
  JSON.parse(localStorage.getItem("card"));
  console.log(retrieveData);
  return (
    <Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Head addtocart={addtocart}/>}></Route>
        <Route path='/products' element={<Allproducts addtocart={addtocart}/>}></Route>
        <Route path='/cart' element={<CartPage retrieveData={retrieveData} addtocart={addtocart}/>}></Route>

      </Routes>
      <Footer/>
   </Fragment>
  );
}

export default App;
