import React, { useState } from "react";
import AuthButton from "../AuthButton/AuthButton";
import { Link } from 'react-router-dom';
import '../../App.css';
import '../Navbar/Navbar.css'
import twitter from '../../images/twitter.svg'
import telegram from '../../images/telegram.svg'




function Navbar({ defaultAccount, isLoggedIn, connButtonText, connectWallet, setErrorMessage, errorMessage}) {
    return ( 
        <div className='navbar-container'>
            <h3 className="logo">TheVault</h3> 
            {/* Left Side - Links */}
            <div className="link-container">
                <Link to="/vault-collection" className="link-element">Collection</Link> 
                <a href='https://etherscan.io/' className="link-element">  
                    Contract
                </a> 
                <a href='https://twitter.com' className="link-element">
                    Socials
                </a>
                {/* Connect */}
            <AuthButton
                defaultAccount = {defaultAccount}
                isLoggedIn = {isLoggedIn}
                connButtonText = {connButtonText}
                connectWallet = {connectWallet}
            />   
            </div>
               
        </div>
     
     );
}

export default Navbar;