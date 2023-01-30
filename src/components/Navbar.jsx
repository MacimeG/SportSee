import { Link } from "react-router-dom"
import logo from "../assets/logoSportSee.png"
import "../styles/Navbar.css"

/**
 * @file React component for horizontal navigation bar in dashboard and profile page
 * @returns {JSX.Element}
 * 
 */

export default function Navbar(){
    return(
        <div className="navbar">
            <img className="navbar_logo" src={logo} alt="logo"></img>
            <Link className="navbar_link" to={"/Profile"}>Accueil</Link>
            <p className="navbar_link">Profil</p>
            <p className="navbar_link">Réglage</p>
            <p className="navbar_link">Communauté</p>
        </div>
    )
}