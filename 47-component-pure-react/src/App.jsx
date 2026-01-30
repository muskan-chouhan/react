import { useState } from 'react'

function App() {

  return (
    <>
      <h1>Pure componenet and impure component</h1>
      <Counter count = {1}/>
      <Counter count = {2}/>
      <Counter count = {3}/>
      <Counter count = {3}/>

    </>
  )
}

// const Counter = ({count}) => {
//   count = count + 1
//   return <h1>Counter {count}</h1>
// }


const cup = () => {
  return<h1>we have {guest} guest  we have to make {guest} cup of tea</h1>
}

export default App
