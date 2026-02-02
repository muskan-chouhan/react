import { Fragment } from 'react'


function App() {


  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>Fragment in react js</h1>
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />

    </Fragment>
  )
}

export default App

const Data = () => {
  return (
    <Fragment>
      <h3>fragment in react js</h3>
      <h3>fragment in react js</h3>
    </Fragment>
  )
}

