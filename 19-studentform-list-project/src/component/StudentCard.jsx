import { useState } from "react";

function StudentCard(props) {
  const [selected, setSelected] = useState(false);

 

  return (
    <div className="student-card">
      <h3 className="student-name">{props.name}</h3>

      <p className="student-info">
        <span className="label">Course:</span>
        <span className="value">{props.course}</span>
      </p>

      <p className="student-info">
        {props.age >= 18 ? (
          <span className="value adult">Adult : {props.age}</span>
        ) : (
          <span className="value minor">Minor : {props.age}</span>
        )}
      </p>

<button
  className="select-btn"
  onClick={() => {
    if (!selected) {
      setSelected(true);       // pehle select karo
    } else {
      props.onDelete();        // phir delete karo
    }
  }}
>
  {selected ? "Remove" : "Select"}
</button>

      
    </div>
  );
}

export default StudentCard;
