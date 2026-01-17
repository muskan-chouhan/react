import { useEffect } from 'react';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  useEffect(() => {
    counterFunction()
  }, [count])

  useEffect(() => {
    callonce()
  }, [])



  function counterFunction() {
    console.log('counter Function', count);
  }



  function callonce() {
    console.log('function once called');

  }


  return (
    <>
      <h1>UseEffect Hook</h1>

      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <br></br><br></br>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </>
  )
}

export default App
