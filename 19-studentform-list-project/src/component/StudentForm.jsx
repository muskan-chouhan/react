import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  function handleClick() {
    if (name && course && age) {
       const ageNumber = Number(age);
      onAddStudent(name, course, ageNumber);
      setName("");
      setCourse("");
      setAge("");
      setError("")

    } else {
      setError('Please fill all fields')

    }
  }

  return (
    <>
      <div className="form-container">
        <form className="student-form">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              const value = e.target.value;

              if (/^[a-zA-Z ]*$/.test(value)) {
                setName(value);
              }
            }}
          />
          <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => {
              const value = e.target.value;

              if (/^[a-zA-Z ]*$/.test(value)) {
                setCourse(value);
              }
            }}
          />

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(event) => {
              const value = event.target.value
              if (value > 0 || value == "") {
                setAge(value)
              }
            }
            } />
          <button type="button" onClick={handleClick}>
            Add Student
          </button>
          {error && <p className="error-text">{error}</p>}

        </form>

      </div>
    </>
  )

}
export default StudentForm;










