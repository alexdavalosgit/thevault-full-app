import React, { useState } from "react";
import AuthButton from "../AuthButton/AuthButton";
import '../../App.css';
import '../Navbar/Navbar.css'




function Navbar({ defaultAccount, isLoggedIn, connButtonText, connectWallet, setErrorMessage, errorMessage}) {
    return ( 
        <div className='navbar-container'>
            <h3 className="logo">THE VAULT</h3>
            {/* Left Side - Social Media Icons */}
            <div className="social-media">
                <a href='https://twitter.com'>Twitter</a> |
                <a href='https://telegram.com'>Telegram</a>
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