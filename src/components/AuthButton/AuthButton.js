import React from "react";
import { Button } from "react-bootstrap";
import "../Navbar/Navbar.css";

const AuthButton = ({ connButtonText, connectWallet }) => {
  return (
    <div className="">
      <Button onClick={connectWallet} variant="primary">
        {connButtonText}
      </Button>
    </div>
  );
};

export default AuthButton;
