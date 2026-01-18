import { useState } from 'react'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  return (
    <>
    <h3>handel props side efffects with useeffect in compnent</h3>
    <Counter counter = {count} data={data}/>
    <button onClick={()=>setCount(count + 1)}>Counter</button>
     <button onClick={()=>setData(data + 1)}>Data</button>
 <Counter/>
    </>
  )
}

export default App
