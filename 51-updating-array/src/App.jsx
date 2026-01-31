import { useState } from 'react'


function App() {
  const [data, setData] = useState(['muskan','neha','mahak'])
 function handelUser(newName){
  // setData([name]); //isse pehle ka data gayab ho jayga excitsing data remove,humko pehle ka data bhi rkhnahai ,
   data[data.length-1] = newName
   console.log(data);
   setData([...data]) //ek new aaray banspread kiya then its work
   

  
 }
  return (
    <>
    <h1 style={{textAlign:'center'}}>Updating Array in state</h1>

  <input 
  type="text" 
  placeholder="enter last user name" 
  onChange={(event)=>handelUser(event.target.value)}
/>

    {
      data.map((item,index)=>(
        <h3 key={index}>{item}</h3>
      ))
    }
    
 
    </>
  )
}

export default App
