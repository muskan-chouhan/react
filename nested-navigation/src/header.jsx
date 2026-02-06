import { Link } from "react-router"

export default function Header() {
    return (<div className="header">
        <div>
            <Link className="link"  to='/'><h2>logo</h2></Link>
        </div>
        <div>
            <ul>
                <li><Link className="link" to= '/'>Home</Link></li>
                <li><Link className="link" to= '/about'>About</Link></li>
                <li><Link className="link" to= '/login'>login</Link></li>
                <li><Link className="link" to= '/College'>College</Link></li>
            </ul>
        </div>
    </div>

    )
}