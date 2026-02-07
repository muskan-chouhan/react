import { Link, Outlet } from "react-router"

export default function Header() {
    return (<div>
    <div className="header">
        <div>
            <Link className="link"  to='/'><h2>logo</h2></Link>
        </div>
        <div>
            <ul>
                <li><Link className="link" to= '/'>Home</Link></li>

            </ul>
        </div>
    </div>
    <Outlet/>
</div>
    )
}