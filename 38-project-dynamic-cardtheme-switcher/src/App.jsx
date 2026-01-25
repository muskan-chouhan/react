import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [textColor, setTextColor] = useState()
  const [cardStyle, setCardStyle] = useState({

     width: "200px",
    border: "1px solid #cccccc3b",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: '10px'
  })

  function updateCard(bgColor,textColor,border){
         setCardStyle({...cardStyle,backgroundColor : bgColor, border :border })
         setTextColor(textColor)
  }  

  return (
    <>
      <button onClick={()=>updateCard('#f8e8e8','#72570a','1px solid #cc0acc3b')}>Theme Change</button>

      <div style={{
        display: 'flex',
        flexWrap: "wrap"
      }}>

        <div style={cardStyle}>
          <img style={{
            width: '200px'
          }}

            src='https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D'></img>

          <div style={{
            padding: "10px",
           color : textColor
          }}>
            <h2>rosy reter</h2>
            <p>Software Devloper</p>
          </div>
        </div>
     
 
  

     </div>

    </>
  )
}

export default App
