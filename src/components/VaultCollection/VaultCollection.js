import React, { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Link } from 'react-router-dom';
import TopCollections from '../TopCollections/TopCollections';
import "../VaultCollection/VaultCollection.css"
import theVault from '../../artifacts/contracts/TheVault.sol/TheVault.json';

function VaultCollection() {
    const [isLoading, setIsLoading] = useState(true);
    const [vaultNfts, setVaultNfts] = useState([]);

    const theVaultAddress = "0x23256e659563dE6dB1E9D73e2E1a94DF922919BD";
   
     // Get Vault NFTS
     async function getArrayNfts() {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(theVaultAddress, theVault.abi, signer);
        
        try {
            const response = await contract.getArrayElements()
            console.log(response);
            console.log(response[1]);
                const responseData = await response.map((nft) => {   
                const _tokenId = parseInt(nft.tokenId._hex);
                const _contractAddress = nft.contractAddress; 
                vaultNfts.push([_tokenId, _contractAddress]);
                
        })
                setIsLoading(false);
                console.log(isLoading);
                console.log(vaultNfts);

        } catch(err) {
            console.log('error: ', err);
        }
    }

    function displayNfts() {
        if(isLoading) {
            return <p>Loading...</p>
        } 
            return (
                vaultNfts.map( (nft, index) => {
                    return <div key={index}>
                        <h3>#{nft[0]} - {nft[1]}</h3>
                    </div>
                })
            )
    }

    
    useEffect(() => {
        getArrayNfts()
        
    }, []);

    return (
        <div>
            <div className='container'>
            <Link to="/home">Home</Link>
            <TopCollections/>
            </div>
            <p>Vault Collection</p>   
            <button onClick={()=> console.log(vaultNfts)}>console log vaultnfts</button>   
            {displayNfts()}
               
        </div>
    )
}

export default VaultCollection;
