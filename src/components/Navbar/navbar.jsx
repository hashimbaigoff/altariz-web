import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar() {
    return (
        <div className="container-navbar">
            <p className="info"><b>Call us:  </b>
                <img src="./images/images.jpeg" alt="logo" width="30px" height="30px" />WhatsApp:123456790</p>
            <p className="mail"><img src="./images/gmail.png" alt="logo" width="30px" height="30px" />Altarizsolutionpvtltd@gmail.com
            </p>
            <p className="login-button">
                <Link to="#">Login</Link>
               <Link to="#"> Registration</Link>
            </p>
        </div >
    )
}

export default Navbar;