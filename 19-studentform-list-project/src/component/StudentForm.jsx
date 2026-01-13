import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  function handleClick() {
    if(name && course && age){
            onAddStudent(name, course, age);
    setName("");
    setCourse("");
    setAge("");
    setError("")
    
  }else{
setError('Please fill all fields')

    }
  }

  return (
    <>
      <div className="form-container">
        <form className="student-form">
          <input type="text" placeholder="Enter Name" value={name} onChange={(event) => setName(event.target.value)} />
          <input type="text" placeholder="Enter Course" value={course} onChange={(event) => setCourse(event.target.value)} />
          <input type="number" placeholder="Enter Age" value={age} onChange={(event) => setAge(event.target.value)} />
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










