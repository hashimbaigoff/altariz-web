import "./footer.css"
import Information from "./information";

function Footer() {
    return (
        <div >
            <Information />
            <div className="footer-copy">
                <p>&copy; All Right Reserved By Altariz Solution Pvt Ltd</p>
                <div className="images-footer"> 
                     <img src="./images/facebook.png" alt="logo" width="20px" height="20px"/>
                     <img src="./images/google.jpeg" alt="logo" width="20px" height="20px"/>
                     <img src="./images/insta.jpeg" alt="logo" width="20px" height="20px"/>
                     <img src="./images/linked.png" alt="logo" width="20px" height="20px"/>
                </div>
            </div>
        </div>
    )
}
export default Footer;