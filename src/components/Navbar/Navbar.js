import React, { useState } from "react";
import AuthButton from "../AuthButton/AuthButton";



function Navbar({ defaultAccount, isLoggedIn, connButtonText, connectWallet, setErrorMessage, errorMessage}) {
    return ( 
        <>
            <h3>THE VAULT - NAVBAR</h3>
            <br/>
            {/* Left Side - Social Media Icons */}
            <div>
                <a href='https://twitter.com'>Twitter</a> <br/>
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