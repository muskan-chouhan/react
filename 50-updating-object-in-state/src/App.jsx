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
    // data.name=val
    // console.log(data);
   let tempData = data;
   tempData.name=val;
    setData({...tempData})
  
  }
  function updateCity(city){
    data.address.city = city
    console.log(data);
      setData({...data,address:{...data.address,city}})

  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Updating object in state</h1>

      <input type='text' placeholder='Update Name' onChange={(event)=>updateName(event.target.value)}></input>
      <br></br><br></br>
      <input type='text' placeholder='Update City' onChange={(event)=>updateCity(event.target.value)}></input>
      <h2>Name : {data.name}</h2>
      <h2>City : {data.address.city}</h2>
      <h2>Country :{data.address.country}</h2>




    </>
  )
}

export default App
