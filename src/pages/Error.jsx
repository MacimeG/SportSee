import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Error.css"
/**
 * React component for display error404 page
 * @file error page
 * @returns {JSX.Element}
 * 
 */


export default function Error404() {
    return (
        <div className="erorContainer">
            <Navbar />
            <h1 className="eror_title">404</h1>
            <h2 className="eror_msg">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="erorLink" to="/Profile">
                <p className="eror_link">Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
}