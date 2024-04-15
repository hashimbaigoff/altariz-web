import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({path, label})=>{
    return(
        <Link to={path}>{label}</Link>
    )
}
export default NavItem;      