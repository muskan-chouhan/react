import { Fragment } from 'react'


function App() {
  return (
    // <> this is also called fragement
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
  return (<>
     <span>hello</span><br>users</br>
   </>
  )
}

