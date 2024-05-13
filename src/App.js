import './App.css';
import Allproducts from './pages/allproducts/products';
import Head from './pages/home/Home';
import { Fragment} from 'react';
import {Route , Routes,} from 'react-router-dom' ;
import CartPage from './pages/cart';
import Header from './component/Header/Header';
import Footer from './component/footer/footer';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  const [count , setCount] = useState(0);
    function addtocart(card,counter){
        cart.push(card);
        localStorage.setItem("cart",JSON.stringify(cart));
        counter();
       }

  function counter(){
    if(cart.length !==0){
      for(let i=0; i<cart.length;i++){
         setCount(count + 1);
      } 
    }
    else{
      setCount(0);
    }
  }
  function deletItem (productId){
    setCount(count - 1);
    let temp = cart.filter((item)=> item.id !== productId);
    localStorage.setItem("cart" , JSON.stringify(temp));
    setCart(temp)
    console.log(temp);
  }
  

  return(
    <Fragment>
      <Header cart={cart} count={count} counter={counter}/>
      <Routes>
        <Route path='/' element={<Head addtocart={addtocart} counter={counter} count={count}/>}></Route>
        <Route path='/products' element={<Allproducts addtocart={addtocart} counter={counter}/>}></Route>
        <Route path='/cart' element={<CartPage cart={cart}  deletItem={deletItem}/>}></Route>
      </Routes>
      <Footer/>
   </Fragment>
  );
}

export default App;
