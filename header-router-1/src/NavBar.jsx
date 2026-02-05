import { Link } from "react-router"
export default function NavBar() {
    return (<div>
        <div>
            <Link className="link"><h1>logo</h1></Link>
        </div>
        <div>
            <ul>
                <li><Link className="link" to= '/'>Home</Link></li>
                <li><Link className="link" to= '/about'>About</Link></li>
                <li><Link className="link" to= '/login'>login</Link></li>
            </ul>
        </div>
    </div>

    )
}