import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ethers, BigNumber } from "ethers";
import "../VaultCollection/VaultCollection.css";
import theVault from "../../artifacts/contracts/TheVault.sol/TheVault.json";
import "../Header/Header.css";
import { theVaultAddress } from "../../utils";

function TotalCollection() {
  const [balance, setBalance] = useState();

  // Get Vault NFTS
  async function getBalanceOf() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      theVaultAddress,
      theVault.abi,
      provider
    );

    try {
      const response = await contract.getArrayElements();
      const _balance = response.length;
      setBalance(_balance);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  useEffect(() => {
    getBalanceOf();
  }, []);

  return (
    <Container fluid className="text-white ">
      <Row className="gap-3 text-center">
        <Col sm={12} md={6} className="stats-element">
          <h3 className="fw-bold">WHAT'S IN THE BOX?</h3>
          <h2 className="">{balance}</h2>
          <Link to="/vault-collection">View</Link>
        </Col>
        <Col className="stats-element">
          <h2>How Many TX's? </h2>
          <h2>500</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default TotalCollection;
