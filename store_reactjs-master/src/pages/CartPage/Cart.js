import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import "./cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(AppContext);
  const items = Object.entries(cartItems);
  const [purches, setPurches] = useState(0);

  useEffect(() => {
    const total = Object.values(cartItems).reduce(
      (sum, item) => sum + Number(item.totalPrice || 0),
      0
    );
    setPurches(total);
  }, [cartItems]);

  return (
    <div className="container-cart">
      <h1 className="cart-title">Your Cart</h1>

      {items.length === 0 ? (
        <h2 className="text-center">0 Items</h2>
      ) : (
        <>
          <ul className="cart-items" id="cart">
            {items.map(([productName, data]) => (
              <li className="cart-item" key={productName}>
                <img src={data.image} alt={productName} />
                <div className="cart-item-details">
                  <div className="cart-item-title">{productName}</div>
                  <div className="cart-item-quantity">
                    Quantity: {data.quantity}
                  </div>
                  <div className="cart-item-price fw-bold">
                    Total: ${Number(data.totalPrice)* Number(data.quantity)}
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(productName)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div>
            <p className="fw-bold">Total: ${purches}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
