import React from "react";
import { Link } from "react-router-dom";
import './NavItem.scss';

const NavItem = ({path, label})=>{
    return(
        <Link to={path} className="nav-links">{label}</Link>
    )
}
export default NavItem;