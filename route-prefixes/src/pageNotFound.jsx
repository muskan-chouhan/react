import { Link } from "react-router"

function PageNotFound() {
  return (
 
    <div style={{textAlign:'center'}}>
    <h1>PageNotFound</h1>
    <div><Link to='/'>Go to Home Page</Link></div>
    <img style={{width:'50%', marginTop:'5px'}} src="https://www.imarkinfotech.com/wp-content/uploads/2017/10/404-Page-Cover.png"></img>
    </div>
  )
}

export default PageNotFound