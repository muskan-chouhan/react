function Card(onAddStudent) {
    return (
        <>
           

                <div className="student-card">
                    <h3 className="student-name">{onAddStudent.name}</h3>

                    <p className="student-info">
                        <span className="label">Course:</span>
                        <span className="value">React</span>
                    </p>

                    <p className="student-info">
                        <span className="label">Age:</span>
                        <span className="value adult">21 (Adult)</span>
                    </p>

                    <button className="select-btn">Select</button>
                </div>



            

        </>
    )
}

export default Card;