import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import { Link } from "react-router-dom";
import "../VaultCollection/VaultCollection.css";
import theVault from "../../artifacts/contracts/TheVault.sol/TheVault.json";
import { theVaultAddress } from "../../utils";

function VaultCollection() {
  const [isLoading, setIsLoading] = useState(true);
  const [vaultNfts, setVaultNfts] = useState([]);

  // Get Vault NFTS
  async function getArrayNfts() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(theVaultAddress, theVault.abi, signer);

    try {
      const response = await contract.getArrayElements();
      console.log(response);
      console.log(response[1]);
      const responseData = await response.map((nft) => {
        const _tokenId = parseInt(nft.tokenId._hex);
        const _contractAddress = nft.contractAddress;
        vaultNfts.push([_tokenId, _contractAddress]);
      });
      setIsLoading(false);
      console.log(isLoading);
      console.log(vaultNfts);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  function displayNfts() {
    if (isLoading) {
      return (
        <h4>
          Loading...
          <br />
          (Make sure you are connected to MetaMask on Rinkeby.)
        </h4>
      );
    }
    return vaultNfts.map((nft, index) => {
      return (
        <div key={index}>
          <h3>
            #{nft[0]} -{" "}
            <a href={`https://rinkeby.etherscan.io/address/${nft[1]}`}>
              View Address
            </a>{" "}
          </h3>
        </div>
      );
    });
  }

  useEffect(() => {
    getArrayNfts();
  }, []);

  return (
    <div className="vault-container">
      <div className="vault-header">
        <Link to="/home" className="vault-links">
          Home
        </Link>
        <h1>Vault Collection</h1>
      </div>
      <div className="vault-content">
        <h2>#Token ID - Contract Address</h2>
        {displayNfts()}
      </div>
    </div>
  );
}

export default VaultCollection;
