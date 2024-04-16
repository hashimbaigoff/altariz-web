import { Link } from "react-router-dom";
import "./footer.scss"
import Information from "./information";

function Footer() {
    return (
        <div >
            <Information />

            <div className="footer-copy">
                <p>&copy; All Right Reserved By Altariz Solution Pvt Ltd</p>
                <div className="images-footer">
                    <Link to="https://www.facebook.com/people/Altariz-Solutions-Pvt-Ltd/100084903571428/">
                        <img className="img-logo" src="./images/facebook.png" alt="logo" width="30px" height="30px" />
                    </Link>
                    <Link to="https://www.altarizsolutions.com/">
                        <img className="img-logo" src="./images/google.jpeg" alt="logo" width="30px" height="30px" /></Link>
                    <Link to="https://www.instagram.com/altarizsolutions/">
                        <img className="img-logo" src="./images/insta.jpeg" alt="logo" width="30px" height="30px" /></Link>
                    <Link to="https://www.linkedin.com/company/altariz-solutions/">
                        <img className="img-logo" src="./images/linked.png" alt="logo" width="30px" height="30px" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;