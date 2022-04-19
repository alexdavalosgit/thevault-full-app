import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../AuthButton/AuthButton";
import '../../App.css';



function Navbar({ defaultAccount, isLoggedIn, connButtonText, connectWallet, setErrorMessage, errorMessage}) {
    return ( 
        <>
            <h3>THE VAULT - NAVBAR</h3>
            {/* Left Side - Social Media Icons */}
            <div className="social-media">
                <a href='https://twitter.com'>Twitter</a> |
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
        </>
     
     );
}

export default Navbar;