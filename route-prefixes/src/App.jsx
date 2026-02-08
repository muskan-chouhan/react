import {Navigate, Route, Routes} from 'react-router'
import Home from './home'
import About from './About'
import College from './College'
import Student from './Student'
import Department from './Department'
import Header from './header'
import './Navbar.css'
function App() {

  return (
    <>
    {/* <Header/> */}
    <Routes>

      <Route element={<Header/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>

      
      
      
       <Route path='/College' element={<College/>}>
         <Route index element={<Student/>}/>
         <Route path='department' element={<Department/>}/>
      </Route>
    </Routes>
    


   
    </>
  )
}

export default App
