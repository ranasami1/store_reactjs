import './App.css';
import Allproducts from './pages/allproducts/products';
import Head from './pages/home/Home';
import { Fragment, useEffect } from 'react';
import {Route , Routes} from 'react-router-dom' ;
import CartPage from './pages/cart';
import Header from './component/Header/Header';
import Footer from './component/footer/footer';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [count , setCount] = useState(0);
    function addtocart(card,counter){
        cart.push(card);
        localStorage.setItem("card",JSON.stringify(cart));
        counter();
       }
  let retrieveData = 
  JSON.parse(localStorage.getItem("card"));

  function counter(){
    if(retrieveData.length !==0){
      for(let i=0; i<retrieveData.length;i++){
         setCount(count + 1);
      } 
    }
    else{
      setCount(0);
    }
  }

  return(
    <Fragment>
      <Header retrieveData={retrieveData} count={count} counter={counter}/>
      <Routes>
        <Route path='/' element={<Head addtocart={addtocart} counter={counter} count={count}/>}></Route>
        <Route path='/products' element={<Allproducts addtocart={addtocart} counter={counter}/>}></Route>
        <Route path='/cart' element={<CartPage retrieveData={retrieveData} addtocart={addtocart}/>}></Route>

      </Routes>
      <Footer/>
   </Fragment>
  );
}

export default App;
