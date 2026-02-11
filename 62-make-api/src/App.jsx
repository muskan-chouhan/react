
async function App() {
  function getUsersData(){
   const url = 'http://localhost:3000/users'
   const response = await fetch(url);
   response = await response.json()
  console.log(response);
  
  }
  return (
    <>
     <h1>install JSON server and Make API</h1>
    </>
  )
}

export default App
