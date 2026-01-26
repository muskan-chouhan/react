import { useState } from 'react'
import styled from 'styled-Components'

function App() {
  // const Heading = styled.h1`
  // color : red;
  // border : 2px solid green;
  // padding : 10px;
  // margin : 20px;
  // border-radius :5px;
  // `

  //second way 

  const Heading =styled.h1({

  color : 'red',
  border : '2px solid green',
  padding : '10px',
  margin : '20px',
  borderRadius :'5px',
  })

  const Stylebtn = styled.button`
  width  :120px;
  padding  : 10px;
  margin :  20px;
  hieght : 20px;
  color : red;
  `

  return (
    <>
    <h1>hlw</h1>
    <Heading>hlw Heading</Heading>
    <Heading>hlw Heading 2</Heading>
    <Heading>hlw Heading 2</Heading>
    <Heading>hlw Heading 3</Heading>
    <Heading>hlw Heading 4</Heading>
    <Stylebtn>Login</Stylebtn>
    <Stylebtn>check</Stylebtn>
    

    </>
  )
}

export default App
