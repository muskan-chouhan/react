import { useRef } from "react";

function App() {
const userRef = useRef(null)
const passRef = useRef(null)
  const handelForm = (event) =>{
    event.preventDefault();
    const name = document.querySelector('#user').value
    console.log(name);
    
    const passwword = document.querySelector('#pass').value

     console.log(passwword);
  }


const  handelFormRef =(event)=>{
  event.preventDefault();



  
   const name = userRef.current.value
   console.log(name);
   const password = passRef.current.value
      console.log(password);
}
  return (
    <>
    <h1>uncontroled components</h1>
    <form action='' method='post' onSubmit={handelForm}>
    <input type='text' placeholder='enter name' id='user'></input>
    <br>
    </br>

    <input type='password' placeholder='enter password' id='pass'></input>
    <br>
    </br>
       <br>
    </br>
    <button>submit</button>
    </form>

    <hr></hr>

        <h1>uncontroled components with useRef</h1>
    <form action='' method='post' onSubmit={handelFormRef}>
    <input type='text' placeholder='enter name' ref={userRef}></input>
    <br>
    </br>

    <input type='password' placeholder='enter password' ref={passRef} ></input>
    <br>
    </br>
       <br>
    </br>
    <button>submit</button>
    </form>
    </>
  )
}

export default App
