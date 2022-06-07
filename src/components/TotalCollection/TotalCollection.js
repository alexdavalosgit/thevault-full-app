import React, { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import "../VaultCollection/VaultCollection.css"
import theVault from '../../artifacts/contracts/TheVault.sol/TheVault.json';
import "../Header/Header.css";

function TotalCollection() {
    const [isLoading, setIsLoading] = useState(true);
    const [balance, setBalance] = useState();

    const theVaultAddress = "0x23256e659563dE6dB1E9D73e2E1a94DF922919BD";
   
     // Get Vault NFTS
     async function getBalanceOf() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(theVaultAddress, theVault.abi, provider);

        try {
            const response = await contract.getArrayElements();
            const _balance = response.length;
            setBalance(_balance);
            
        } catch(err) {
            console.log('error: ', err);
        }
    }

    
    useEffect(() => {
        getBalanceOf()
        
    }, []);

    return (
        <div className="info-right-text">
           <h1> {balance} </h1>
           <p>nfts in the vault.</p> 
        </div>
    )
}

export default TotalCollection;