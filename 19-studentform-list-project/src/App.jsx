import StudentForm from "./component/StudentForm"
import StudentCard from "./component/StudentCard"
import { useState } from "react"

function App() {
  const [students, setStudents] = useState([]);
    function addStudent(name, course, age) {
    const newStudent = {
      name: name,
      course: course,
      age: age,
    };

    setStudents([...students, newStudent]);
  }

    return (
    <>
      <h1 className="title">Student Form</h1>

      <StudentForm onAddStudent={addStudent} />

      <div className="student-list">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            course={student.course}
            age={student.age}
          />
        ))}
      </div>
    </>
  );
}

export default App;

