import { useState } from "react";

function Card({ title, category, price, isFree }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="card">

      <h2 className="course-title">{title}</h2>

      <div className="info">
        <span className="label">Category</span>
        <span className="value">{category}</span>
      </div>

      <div className="info">
        {isFree ? (
          <>
            <span className="label">Price</span>
            <span className="value free">Free</span>
          </>
        ) : (
          <>
            <span className="label">Price</span>
            <span className="value">₹{price}</span>
          </>
        )}
      </div>

      <button
        className={`btn ${isSelected ? "remove" : ""}`}
        onClick={handleClick}
      >
        {isSelected ? "Remove" : "Add Course"}
      </button>

    </div>
  );
}

export default Card;
