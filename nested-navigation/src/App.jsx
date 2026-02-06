import {Navigate, Route, Routes} from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import Header from './header'
import College from './College'
import './Navbar.css'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/College' element={<College/>}/>
    </Routes>


   
    </>
  )
}

export default App
