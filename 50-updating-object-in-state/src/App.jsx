import { useState } from 'react'

function App() {
  const [data, setData] = useState({
    name: 'Anil',
    address: {
      city: 'Delhi',
      country: 'india'
    }
  })
  function updateName(val) {
console.log(val);

  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Updating object in state</h1>

      <input type='text' placeholder='Update Name' onChange={(event)=>updateName(event.target.value)}></input>
      <h2>Name : {data.name}</h2>
      <h2>City : {data.address.city}</h2>
      <h2>Country :{data.address.country}</h2>




    </>
  )
}

export default App
