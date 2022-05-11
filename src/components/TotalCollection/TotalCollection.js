import React, { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import "../VaultCollection/VaultCollection.css"
import theVault from '../../artifacts/contracts/TheVault.sol/TheVault.json';

function TotalCollection() {
    const [isLoading, setIsLoading] = useState(true);
    const [balance, setBalance] = useState();

    const theVaultAddress = "0x8181236bf43Cb09C34048f11510B943921EfE601";
   
     // Get Vault NFTS
     async function getBalanceOf() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(theVaultAddress, theVault.abi, signer);

        try {
            const response = await contract.balanceOf(theVaultAddress)
            console.log(response);
            
        } catch(err) {
            console.log('error: ', err);
        }
    }

    
    useEffect(() => {
        getBalanceOf()
        
    }, []);

    return (
        <div>
           <h1>The Vault Balance:</h1>    
        </div>
    )
}

export default TotalCollection;