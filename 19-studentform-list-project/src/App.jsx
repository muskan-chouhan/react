import StudentForm from "./component/StudentForm"
import StudentCard from "./component/StudentCard"

function App() {
  return (
    <>
      <h1 className="title">Student Form</h1>

      <StudentForm/>

       <div class="student-list">
        <StudentCard/> 
       </div>
    </>
  )
}
export default App
