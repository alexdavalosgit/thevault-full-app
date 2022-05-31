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
            <h3 className="logo">THE VAULT</h3> 
            {/* Left Side - Social Media Icons */}
            <div className="social-media">
                <Link to="/vault-collection" className="link-element">Collection</Link> 
                <a href='https://twitter.com'> 
                    <img src={twitter} alt="twitter"/> 
                </a> 
                <a href='https://telegram.org'>
                    <img src={telegram} alt="telegram"/> 
                </a>
            </div>
            {/* Right Side - Sections and Connect */}

            {/* Connect */}
            <AuthButton
                defaultAccount = {defaultAccount}
                isLoggedIn = {isLoggedIn}
                connButtonText = {connButtonText}
                connectWallet = {connectWallet}
            />      
        </div>
     
     );
}

export default Navbar;