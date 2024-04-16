import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import '../Css/Header/header.css';


function Header(){
    return(
        <header className="Header">
            <Logo/>
            <h3>Altariz Solutions Pvt Ltd.</h3>
            <NavItem path="/" label="Home"/>
            <NavItem path="/about" label="About Us"/>
            <NavItem path="/training" label="Training"/>
            <NavItem path="/development" label="Development"/>
            <NavItem path="/outsourcing" label="Outsourcing"/>
        </header>
    )
}
export default Header;