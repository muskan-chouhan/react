
function ToDo() {
    function callFun() {
        alert("you called me")
    }
    return (
        <div className="parent">
            <h1>Riya sidhu Todos</h1>
            <img src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"></img>
            <ul>
                <li>Invent new traffic light</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click me</button>
        </div>
    )
}

export default ToDo;
