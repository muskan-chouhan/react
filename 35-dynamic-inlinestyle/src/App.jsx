import { useState } from 'react'

function App() {
   const [textColor,setTextColor] = useState('black')
   const [grid,setGrid] = useState(false)
  const [cardStyle,setcardStyle] = useState({
    width: "200px",
    border: "1px solid #cccccc3b",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: '10px'
  })

  const updateTheme = (bgColor,textColor) =>{
     setcardStyle({...cardStyle,backgroundColor : bgColor})
     setTextColor(textColor)
  }
  return (
    <>
      <button onClick={()=>updateTheme('#f8e8e8','#0f268f')}>Change Theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
      <button onClick={()=>setGrid(!grid)}>Toggle</button>
      <br></br>
      <div style={{
        display: grid?'flex':'block',
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
        </div>        <div style={cardStyle}>
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
        </div>        <div style={cardStyle}>
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
        </div>        <div style={cardStyle}>
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
