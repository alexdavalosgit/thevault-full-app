import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../AuthButton/AuthButton";
import '../../App.css';
import '../Navbar/Navbar.css'
import '../../images/telegram.svg';
import '../../images/twitter.svg';




function Navbar({ defaultAccount, isLoggedIn, connButtonText, connectWallet, setErrorMessage, errorMessage}) {
    return ( 
        <div className='navbar-container'>
            <h3>THE VAULT</h3>
            {/* Left Side - Social Media Icons */}
            <div className="social-media">
                <a href='https://twitter.com' src='../../images/twitter.svg'>Twitter</a> |
                <a href='https://telegram.com'>Telegram</a>
            </div>
            {/* Right Side - Sections and Connect */}

            {/* Connect */}
            <AuthButton
                defaultAccount = {defaultAccount}
                errorMessage = {errorMessage}
                setErrorMessage = {setErrorMessage}
                isLoggedIn = {isLoggedIn}
                connButtonText = {connButtonText}
                connectWallet = {connectWallet}
            />      
        </div>
     
     );
}

export default Navbar;