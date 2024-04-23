import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
    return (
        <div className="container-navbar">
            <p className="info"><span > &#x1F4DE;</span>Call us: +91 7842 100 498 </p>
            <p className="mail"><span>&nbsp; &#x2709;</span> hr@altarizsolutions.com</p>
            <p><Link className="google-map" to="https://maps.app.goo.gl/gkoetve3QmooHjsb8">
              &#x1F4CD;<span>Meat Market Street,Madanapalli.</span></Link> </p>
            <p className="login-button">
                <Link className="navbar-link" to="/login&register">Login/Register</Link>
            </p>
        </div >
    )
}

export default Navbar;