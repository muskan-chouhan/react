import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [gender, setGender] = useState('male')
const [city, setCity] = useState('delhi')
  return (
    <>
    <h1>Handel Radio and DropdownS</h1>
    <h2>Select Gender</h2>
    <input type='radio' id='female' name='gender' value={'female'} onChange={(event)=>setGender(event.target.value)} checked={gender=='female'}/>
    <label htmlFor='female'>female</label>
     <input type='radio' id='male' name='gender' value={'male'} onChange={(event)=>setGender(event.target.value)} checked={gender=='male'}/>
      <label htmlFor='male'>male</label>

      <h2>gender selected : {gender}</h2>

        <br/><br/>
        <h1>Select City</h1>
        <select defaultValue={'delhi'}  onChange={(event)=>setCity(event.target.value)}>
          <option value='noida'>noida</option>
          <option value='gurgaon'>gurgaon</option>
          <option value='delhi'>delhi</option>
        </select>

         <h2>selected City: {city}</h2>
   </>
  )
}

export default App
