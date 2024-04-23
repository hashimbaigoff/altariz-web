import React from "react";
import { Link } from "react-router-dom";
import './NavItem.scss';

const NavItem = ({path, label})=>{
    return(
       <p><Link className="nav-links" to={path} >{label}</Link></p> 
    )
}
export default NavItem;