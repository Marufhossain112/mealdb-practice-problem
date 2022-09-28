import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3>Ordered Items List </h3>
      <h4 style={{ marginTop: "12px" }}>Selected items : {cart.length} </h4>
      {cart.map((cartLi) => (
        <li>{cartLi.strMeal}</li>
      ))}
    </div>
  );
};

export default Cart;
