import { useState } from 'react'
import User from './components/user'
import Wrapper from './components/wrapper'


function App() {

  return (
    <div>
      <h1>Props in react JS</h1>
      {/* <User name='Muskan Chouhan'/>
     <User/>
     <User name='neha Chouhan'/>
     <User/> */}

      <Wrapper color="pink">
        <h1>Hii Everyone</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hii anil</h1>
      </Wrapper>

      <Wrapper>
        <h1>hello Admin</h1>
        <p style={{color:'red'}}>Please Login </p>
      </Wrapper>
    </div>
  )
}

export default App
