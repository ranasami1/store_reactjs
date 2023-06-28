import React from "react";
import "./cart.css";
const CartPage = () => {
    return(
      <section className="cart">
        <h1 className="text-center">Cart</h1>
        <table>
          <thead>
          <td>
            <tr>id</tr>
            <tr>product</tr>
            <tr>price</tr>
          </td>
          </thead>
          <tbody>
            <td>
              
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </td>
          </tbody>
        </table>
        <div className="total">
          <h4 className="text-center border-bottom bg-light">total</h4>
          <div className="container">
            <p className="text-center">0$</p>
            <div className="options">
            <button>Buy now</button>
            <button onClick={()=>localStorage.clear()}>Clear Cart</button>
            </div>
            
          </div>
          
        </div>
      </section>
  );
}
export default CartPage