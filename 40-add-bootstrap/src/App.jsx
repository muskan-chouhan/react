
import {Button} from "react-bootstrap"
import { Alert,Navbar, NavDropdown,Nav,Container} from "react-bootstrap"
function App() {

  return (
    <>



  
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>






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
