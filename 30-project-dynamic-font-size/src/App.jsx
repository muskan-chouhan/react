import { useState } from 'react'

function App() {
  const [text, setText] = useState('small')

  return (
    <>
      <select onChange={(event)=>setText(event.target.value)} defaultValue={'small'}>
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
      </select>

         {
      text == 'medium'?<h1 className='medium'>muskan medium</h1>
      :text == 'large'?<h1 className='large'>muskan large</h1>
      :<h1 className='small'>muskan small</h1>
     
    }
    </>
  )
}

export default App
