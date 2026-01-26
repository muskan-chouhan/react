
import {Button} from "react-bootstrap"
import { Alert } from "react-bootstrap"
function App() {


  return (
    <>
 <h2>Add Bootstrap in react js</h2>
 <button>Add</button><br></br><br></br>
 <Button >Add</Button><br></br><br></br>

 <Alert variant="danger">hlw bootstrap installed</Alert>
<br></br><br></br>
<br></br><br></br>


 <Button  variant="success" onClick={()=>alert('bootstrap button')}>bootstrap Button</Button>
 <br></br><br></br>
 <br></br><br></br>
 <button  variant="success" onClick={()=>alert('bootstrap button')}>simple bootstrap</button>
    
    <br></br><br></br>
    <br></br><br></br>
    </>
  )
}

export default App
