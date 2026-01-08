import { useState } from "react";

function Card({ title, category, price, isFree }) {

const [course, setCourse] = useState("Add Course");

const select = () => {
  if (course === "Add Course") {
    setCourse("Remove");
  } else {
    setCourse("Add Course");
  }
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

      <button className="btn" onClick={select}>{course}</button>
 {/* <button className="btn" onClick={select}>Add course</button> */}

    </div>
  );
}

export default Card;
