import Student from "./student";

const College = ({ college }) => {
    return (
        <div style={
            {
                background: "#ccc",
                padding: '20px',
                borderBottom: '2px solid black',
                margin: '20px',
                borderRadius: '10px'

            }
        }>

            <h2>{college.name}</h2>
            <ul>
                <li>
                    <h3>{college.city}</h3>
                </li>
                <li>
                    <h3>{college.website}</h3>
                </li>
                <li>
                  <Student students={college.students}/>
                </li>
            </ul>

        </div>

    )
}

export default College;