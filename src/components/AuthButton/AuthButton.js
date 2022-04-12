import React, { useState } from "react";

const AuthButton = ({ defaultAccount, isLoggedIn, connButtonText, connectWallet, setErrorMessage, errorMessage}) => {
  

    return (
      <>
          <button onClick={connectWallet}>{connButtonText}</button>
          <br/>
          <h5>Address connected: {defaultAccount} </h5>
          <h5>Logged In : {isLoggedIn ? "true" : "false"}</h5>
        
      </>
    );
};

export default AuthButton;