import { useState } from "react";


function StudentForm() {
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [age, setAge] = useState('')

  return (
    <>
      <div className="form-container">
        <form className="student-form">
          <input type="text" placeholder="Enter Name" value = {name} onChange={(event)=>setName(event.target.value)}/>
          <input type="text" placeholder="Enter Course" value = {course} onChange={(event)=>setCourse(event.target.value)}/>
          <input type="number" placeholder="Enter Age" value = {age}  onChange={(event)=>setAge(event.target.value)} />

          <button type="button" className="btn"> Add Student</button>
        </form>
      </div>
    </>
  )
}

export default StudentForm;
