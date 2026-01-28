


function App() {

  const handelSubmit = async() =>{
  await new Promise(res =>setTimeout(res,2000));
    
console.log('submit');

  
  }
  return (
    <>
    <form action={handelSubmit}>
      <h1>UserFromSatatus Hook in recat js 19</h1>
      <input type='text' placeholder='Enter Name'></input>
      <br></br>
      <br></br>
      <input type='password' placeholder='Enter Password'></input>
      <br>
      </br>
      <button>Submit</button>
      </form>
    </>
  )
}

export default App
