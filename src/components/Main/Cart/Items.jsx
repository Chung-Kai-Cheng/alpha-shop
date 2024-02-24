import React, { useState } from "react";

export default function Items({ name, img, price, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onQuantityChange(price, -1);
    }
  };

  const handleQuantityPlus = () => {
    setQuantity(quantity + 1);
    onQuantityChange(price, 1);
  };

  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
    >
      <img className="img-container" src={img} alt="img" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            {/* <svg className="product-action minus">
                <use xlinkHref="#svg-icon-minus" />
                </svg> */}
            <img
              className="product-action minus"
              src="/icons/minus.svg"
              alt="minus"
              onClick={handleQuantityMinus}
            />
            <span className="product-count">{quantity}</span>
            <img
              className="product-action plus"
              src="/icons/plus.svg"
              alt="plus"
              onClick={handleQuantityPlus}
            />
            {/* <svg className="product-action plus">
                <use xlinkHref="#svg-icon-plus" />
                </svg> */}
          </div>
        </div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
}
