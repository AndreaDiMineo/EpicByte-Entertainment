import { Link } from "react-router-dom"
import "./headerstyle.css"

export const Header = () => {
    return (
        <div className="navi">
            <div className="container">
                <img className="logo" src="https://i.ibb.co/nMQ4NTv/epicbyte.png"/>
                <ul>
                    <li>
                        <Link to={"/"} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/games"} >
                            Games
                        </Link>
                    </li>
                    <li>
                        <Link to={"/team"} >
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contacts"} >
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
