import { useEffect } from 'react'
import { useState } from 'react'
import Counter from './component/counter'

 
function App() {

  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const [display, setDisplay] = useState(true)
  return (
<>
{
  display?<Counter data={data} count={count}></Counter>:null
}
<button onClick={() => setCount(count + 1)}>Counter</button>
<button onClick={() => setData(data + 1)}>Data</button>
<button onClick={() => setDisplay(!display)}>Toggle</button>


</>
  )
}

export default App
