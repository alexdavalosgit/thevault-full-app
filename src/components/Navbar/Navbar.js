import React, { useState } from "react";
import AuthButton from "../AuthButton/AuthButton";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../Navbar/Navbar.css'



function Navbar({ defaultAccount, isLoggedIn, connButtonText, connectWallet, setErrorMessage, errorMessage}) {
    const [navbarOpen, setNavbarOpen] = useState(false);


    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        console.log(navbarOpen);

    }

    return ( 
        <nav className="navbar">
            <h3 className="logo">TheVault</h3> 

            <ul className={`nav-menu ${navbarOpen ? " showMenu" : ""}`}> 
                <li className="nav-item">
                    <Link to="/vault-collection" className="nav-link">Collection</Link>
                </li>
                <li className="nav-item">
                    <a href='https://etherscan.io/' className="nav-link">Contract</a>
                </li>
                <li className="nav-item">
                <a href='https://twitter.com' className="nav-link">Twitter</a>
                </li>

                <AuthButton
                defaultAccount = {defaultAccount}
                isLoggedIn = {isLoggedIn}
                connButtonText = {connButtonText}
                connectWallet = {connectWallet}
            />   
            
            </ul>
            <div className="hamburger" onClick={handleToggle}>
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </div>
        </nav>
     
     );
}

export default Navbar;