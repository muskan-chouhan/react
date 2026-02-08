import {Navigate, Route, Routes} from 'react-router'
import Home from './home'
import About from './About'
import College from './College'
import Student from './Student'
import Login from './login'
import Department from './Department'
import Header from './header'
import './Navbar.css'
import PageNotFound  from './pageNotFound'
function App() {

  return (
    <>
    {/* <Header/> */}
    <Routes>

      <Route element={<Header/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user/login' element={<Login/>}/>
      </Route>

      
      
       <Route path='/College' element={<College/>}>
         <Route index element={<Student/>}/>
         <Route path='department' element={<Department/>}/>
      </Route>

      <Route path='*' element={<PageNotFound/>}/>
       {/* <Route path='*' element={<Navigate to='/'/>}/> */}
    </Routes>
    


   
    </>
  )
}

export default App
