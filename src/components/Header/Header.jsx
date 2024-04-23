import React from "react";
import './Header.scss';
import NavItem from "../NavItem";
import Navbar from "../Navbar/navbar";

function Header() {
    return (
    <div className="header-nav">
       <Navbar/>
        <header className="header">
            <div className="logo"><img src="images/AltarizLogoBlue.jpg" alt="img" />
            <h3 className="logo-text">Altariz Solutions Pvt Ltd.</h3></div>
            <div className="nav-path">
                <NavItem path="/" label="Home" />
                <NavItem path="/about" label="About Us" />
                <NavItem path="/training" label="Training" />
                <NavItem path="/development" label="Development" />
                <NavItem path="/outsourcing" label="Outsourcing" />
            </div>
        </header>
        </div>
    )
}
export default Header;
{/* <div class="container">
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
    <span class="fs-4">Simple header</span>
  </a>

  <ul class="nav nav-pills">
    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
    <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
    <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
  </ul>
</header>
</div> */}
