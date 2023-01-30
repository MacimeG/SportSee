import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/Profile.css'

/**
 * React component for display Profile page
 * @file Profile page
 * @returns {JSX.Element}
 * 
 */

export default function Profile(){
    return(
        <div>
            <Navbar />
            <h1 className="title">bienvenu chez SportSee ! </h1>
            <h2 className="selectProfil">Veuillez choisir votre profil</h2>
            <div className="containerCard">
                <div className="link_accueil">
                <Link className="linkUser" to={"/Dashboard/12"}>Karl</Link>
                </div>
                <Link className="linkUser" to={"/Dashboard/18"}>Cécilia</Link>
            </div>
        </div>
    )
}