import React, { useState } from "react";
import { store } from "../data";

export default function Store() {
  // const data = await fetch("http://example.com/movies.json");
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="container">
        {store.map(function (product) {
          return (
            <div
              className="product"
              onClick={() => {
                cart.push(product);
                setCart([...cart]);
              }}
              key={product.id}
            >
              <div className="name">{product.name}</div>
              <img src={product.image} width="100px" height="100px" />
              <div className="price">{product.price}</div>
            </div>
          );
        })}
      </div>
      <div className="cart">
        <h3>Cart</h3>
        <div className="cart-items">
          {cart.map((item, idx) => {
            return <div key={idx}>{item.name}</div>;
          })}
        </div>
        <div>Total:</div>
        <strong>
          {cart.reduce(function (acc, next) {
            const a = acc;
            const b = next;
            debugger;
            return acc + next.price;
          }, 0)}
        </strong>
      </div>
    </div>
  );
}
