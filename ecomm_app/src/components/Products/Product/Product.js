import React from "react";
import "./Product.css";

function Product({ product }) {
  return (
    <div className="card">
      <img src={product.images[0]} alt="" />
      <div className="card__info">
        <h4>{product.title}</h4>
        <h4>{product.description}</h4>
        <h2>$ {product.price}</h2>
      </div>
    </div>
  );
}

export default Product;
