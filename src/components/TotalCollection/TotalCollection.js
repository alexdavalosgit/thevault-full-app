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
    <div className="stats-container text-white pb-5 px-5">
      <Row className="gap-4">
        <Col className="border-white-round text-center p-2">
          <h3 className="fw-bold">How many ERC-721 tokens in the vault:</h3>
          <h2 className="">{balance}</h2>
          <Link to="/vault-collection">View All</Link>
        </Col>
        <Col className="border-white-round text-center p-2">
          <h2>Total transactions: </h2>
          <h2>500</h2>
        </Col>
      </Row>
    </div>
  );
}

export default TotalCollection;
