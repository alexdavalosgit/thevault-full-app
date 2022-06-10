import React, { useState } from "react";
import '../Navbar/Navbar.css';

const AuthButton = ({ connButtonText, connectWallet}) => {
  

    return (
      <div className='auth-container'>
          <button onClick={connectWallet}>{connButtonText}</button>
      </div>
    );
};

export default AuthButton;