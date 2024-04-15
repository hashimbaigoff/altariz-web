import "./navbar.css"
function Navbar() {
    return (
        <div className="container-navbar">
            <p className="info"><b>Call us:  </b>
                <img src="./images/images.jpeg" alt="logo" width="30px" height="30px" />WhatsApp:123456790</p>
            <p className="mail"><img src="./images/gmail.png" alt="logo" width="30px" height="30px" />Altarizsolutionpvtltd@gmail.com
            </p>
            <p className="login-button">
                <a href="#">Login</a>
               <a href="#"> Registration</a>
            </p>
        </div >
    )
}

export default Navbar;