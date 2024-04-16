import React from "react";
import './Header.scss';
import NavItem from "../NavItem";

function Header(){
    return(
        <header className="header">
            <div className="logo"><img src="images/download.png" />
            <h3 className="logo-text">Altariz Solutions Pvt Ltd.</h3></div>
            <div className="nav-path">
            <NavItem path="/" label="Home"/>
            <NavItem path="/about" label="About Us"/>
            <NavItem path="/training" label="Training"/>
            <NavItem path="/development" label="Development"/>
            <NavItem path="/outsourcing" label="Outsourcing"/>
            </div>
        </header>
    )
}
export default Header;