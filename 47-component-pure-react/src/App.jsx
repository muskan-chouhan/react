import { useState } from 'react'
let data= 20;
function App() {
   
  // impure component
  let data = 40;

  
  // pure function
  function pureFun(x, y) {
    return ('x+y')
  }

  return (
    <>
      <h1>Pure componenet and impure component</h1>


    </>
  )
}

export default App
