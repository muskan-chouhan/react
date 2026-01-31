import { useState } from 'react'


function App() {
  const [data, setData] = useState(['muskan','neha','mahak'])

  return (
    <>
    <h1 style={{textAlign:'center'}}>Updating Array in state</h1>
    {
      data.map((item,index)=>(
        <h3 key={index}>{item}</h3>
      ))
    }
    <button onClick={()=>setName('muskan chouhan')}>Updating Name</button>
 
    </>
  )
}

export default App
