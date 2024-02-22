import React from "react";
import "../../../styles/cart.scss";
import CartLists from "./CartLists";
import Items from "./Items";

export default function Cart() {
  const totalPrice = CartLists.reduce((sum, item) => {
    return (sum = item.price * item.quantity);
  }, 0);

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price={0}>
        {CartLists.map((cartItem) => (
          <Items {...cartItem} key={cartItem.id} />
        ))}
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price" />
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice}</div>
      </section>
    </section>
  );
}
