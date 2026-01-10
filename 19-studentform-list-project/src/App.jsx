import StudentForm from "./component/StudentForm"
import StudentCard from "./component/StudentCard"

function App() {
  function addStudent(name, course, age) {
    console.log(name, course, age); // yahin data aa gaya
  }
  return (
    <>
      <h1 className="title">Student Form</h1>

      <StudentForm addStudent={addStudent} />

       <div className="student-list">
        <StudentCard/> 
       </div>
    </>
  )
}
export default App
