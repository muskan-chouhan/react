import { Fragment } from 'react'


function App() {


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Fragment in react js</h1>
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />

    </div>
  )
}

export default App

const Data = () => {
  return (
    <div>
      <h3>fragment</h3>
      <h3>fragment</h3>
    </div>
  )
}

