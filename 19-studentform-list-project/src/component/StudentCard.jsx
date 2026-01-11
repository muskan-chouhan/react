function StudentCard(props) {
    return (
        <>
           

                <div className="student-card">
                    <h3 className="student-name">{props.name}</h3>

                    <p className="student-info">
                        <span className="label">Course:</span>
                        <span className="value">{props.course}</span>
                    </p>

                    <p className="student-info">
                        <span className="label">Age:</span>
                        <span className="value adult">{props.age}</span>
                    </p>

                    <button
                     className="select-btn">Select</button>
                </div>



            

        </>
    )
}

export default StudentCard;