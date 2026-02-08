import {Link,NavLink,Outlet} from 'react-router'

function College() {
  return (
    <div className='college' style={{textAlign:'center'}}>
    <h1>College</h1>
    <Link to='/'>Go Back to Home</Link>
    <NavLink className='link' to=' '>Student</NavLink>
    <NavLink className='link' to='department'>Department</NavLink>
    <Outlet/>
    </div>
  )
}

export default College