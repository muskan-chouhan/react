import { useState } from "react";
const Product = ({ name, image, category, price }) => {
    const[isSelected,setSelected] =useState(false)

    function handler(){
        setSelected(!isSelected)
    }
  return (
    <div className="product">
      <img src={image} alt={name} />

      <h2 className="product-name">{name}</h2>

      <div className="info">
        <span className="label">Category</span>
        <span className="value">{category}</span>
      </div>

      <div className="info">
        <span className="label">Price</span>
        <span className="value free">{price}</span>
      </div>

      <button className={`btn ${isSelected ? "remove" : "add"}`}onClick={handler}>
        {isSelected?"remove": "addWishlist"}
      </button>

      
      
    </div>
  );
};

export default Product;
