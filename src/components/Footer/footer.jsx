import { Link } from "react-router-dom";
import "./footer.scss"
import Information from "./information";
import SocialMedia from "./socialMedia";

function Footer() {
    return (
        <div >
            <Information />
            <SocialMedia />
        </div>
    )
}
export default Footer;