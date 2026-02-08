import {Route, Routes} from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import UsersList from './UsersList'
import NavBar from './NavBar'
import PageNotFound from './PageNotFound'
import UserDetails from './UserDetails'
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<UsersList/>}/>
      <Route path='/users/:id' element={<UserDetails/>}/>
      
      <Route path='*' element={<PageNotFound/>}/>
       {/* <Route path='*' element={<Navigate to='/login'/>}/> */}
    </Routes>

   
    </>
  )
}

export default App
