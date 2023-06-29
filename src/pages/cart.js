import React, { useState } from "react";
import "./cart.css";

const CartPage = () => {
  let retrieveData = 
  JSON.parse(localStorage.getItem("card"));
  console.log(retrieveData);
  
    return(
      <section className="cart">
        <h1 className="text-center">Cart</h1>
        <table>
          <thead>
          <td>
            <tr className="text-center">id</tr>
            <tr className="text-center">product</tr>
            <tr className="text-center">price</tr>
            <tr> </tr>
          </td>
          </thead>
          <tbody>
              {retrieveData.map((data)=>{
                return(
                  <td>
                  <tr className="text-center">{data.id}</tr>
                  <tr className="text-center"><img src={data.image} style={{width:40}}/>
                  <h6>{data.title}</h6></tr>
                  <tr className="text-center">{data.price} $</tr>
                  <tr className="text-center"><button id="C">Delete</button></tr>
            </td>
                )
              })}
              
             
          </tbody>
        </table>
        <div className="total">
          <h4 className="text-center border-bottom bg-light">total</h4>
          <div className="container">
            <p className="text-center"> $</p>
            <div className="options">
            <button id="C">Buy now</button>
            <button id="C" onClick={()=>localStorage.clear()}>Clear Cart</button>
            </div>
            
          </div>
          
        </div>
      </section>
  );
}
export default CartPage