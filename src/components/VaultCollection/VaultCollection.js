import { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import theVault from '../../artifacts/contracts/TheVault.sol/TheVault.json';

function VaultCollection() {
    const [contractAddress, setContractAddress] = useState(null);

    const theVaultAddress = "0x68afBaAe6371f81Ac2b0334F11CF5Dd5eceF28e7";
    const vaultNfts = [];

     // Get Vault NFTS
     async function getArrayNfts() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(theVaultAddress, theVault.abi, signer);
        try {
            const response = await contract.getArrayElements();
            console.log('response: ', response);  
            await updateVault();

                // Update vault function
                function updateVault() {
                    response.map((nft) => {
                        const {_hex} = nft.tokenId;
                        const _tokenId = parseInt(nft.tokenId._hex);
                        const _contractAddress = nft.contractAddress; 
                        vaultNfts.push([_tokenId, _contractAddress]);
                        console.log('tokenId: ', _tokenId);
                        console.log('contract address: ', _contractAddress);
                        console.log(vaultNfts);
                })
        }
                // Display nfts
                function displayNfts() {
                    vaultNfts.map((nft) => {
                        return (
                            <p>hi</p>
                        )
                    })
                }

/*             for(let i = 0; i < response.length; i++) {
                const {_hex} = response[i].tokenId;
                const _tokenId = parseInt(response[i].tokenId._hex);
                const _contractAddress = response[i].contractAddress;       
                console.log('tokenId: ', _tokenId);
                console.log('contract address: ', _contractAddress);
                
                const vaultNfts = response.map(() => {
                    return(
                        <div>
                             <p>tokenId: {_tokenId}</p>
                            <p>contract adresss: {_contractAddress}</p>
                        </div>
                    )
                })
                
            } */
            
        } catch(err) {
            console.log('error: ', err);
        }
    }

    useEffect(() => {
        getArrayNfts()
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default VaultCollection;
