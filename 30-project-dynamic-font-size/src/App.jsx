import { useState } from 'react'

function App() {
  const [text, setText] = useState('Small')

  return (
    <>
      <select onChange={(event) => setText(event.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      {
        text === 'Small' && <h1 className="small">muskan</h1>
      }
      {
        text === 'Medium' && <h1 className="medium">muskan</h1>
      }
      {
        text === 'Large' && <h1 className="large">muskan</h1>
      }
    </>
  )
}

export default App
