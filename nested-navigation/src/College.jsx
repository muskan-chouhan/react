import {Link,NavLink,Outlet} from 'react-router'

function College() {
  return (
    <div className='college' style={{textAlign:'center'}}>
    <h1>College</h1>
    <NavLink className='link' to='student'>Student</NavLink>
    <NavLink className='link' to='department'>Department</NavLink>
    <NavLink className='link' to='details'>College Detail</NavLink>
    <Outlet/>
    </div>
  )
}

export default College