import PropTypes from "prop-types"
/**
 * React component for display the name of user with a little welcome message
 * @param {string} props prop for the name of user
 * @returns {JSX.Element}
 */


function DataUser(props) {

    return (
    <div className="dataUser_info">

        <p className="dataUser_hello">Bonjour<span className="dataUser_firstName">{props.name}</span></p>
        <p className="dataUser_commentaire">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  
    </div>
    )
}
DataUser.propTypes={
    props: PropTypes.string
}
export default DataUser;