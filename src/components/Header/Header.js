import { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Link } from 'react-router-dom';
import theVault from '../../artifacts/contracts/TheVault.sol/TheVault.json';
import nftContract from '../../artifacts/@openzeppelin/contracts/token/ERC721/ERC721.sol/ERC721.json';
import TopCollections from "../TopCollections/TopCollections";
import HeaderInfo from "./HeaderInfo";
import Loading from "../Loading/Loading";
import './Header.css'
import Popup from '../Popup/Popup';
import RandomNft from '../RandomNft/RandomNft';
import Error from '../Error/Error';

const theVaultAddress = "0x8181236bf43Cb09C34048f11510B943921EfE601";

function Header({}) {
    const [nftContractAddress, setNftContractAddress] = useState('');
    const [nftTokenId, setNftTokenId] = useState(0);
    const [vault, setVault] = useState([]);
    const [depositStatus, setDepositStatus] = useState(false);
    const [randomNft, setRandomNft] = useState([]);
    const [withdrawLoading, setWithdrawLoading] = useState(false);
    const [displayPopup, setDisplayPopup] = useState(false);
    const [withdrawError, setWithdrawError] = useState(false);
    const [color, setColor] = useState('#50E3C2');
   

    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    // Check if TX was mined on blockchain
    const isTransactionMined = async (txnHash) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let txn_test = await provider.getTransaction(txnHash);
        if (txn_test) {
            if (txn_test.blockNumber) {
                console.log("txn_test: ");
                console.log(txn_test);
                return txn_test
            }
        } else console.log("failed txn test");
    
    }

    // Get Vault NFTS
    async function getArrayNfts() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(theVaultAddress, theVault.abi, signer);
        try {
            const response = await contract.getArrayElements();
            console.log('response: ', response);  
            let tempArray = [];
            // map through array
            for(let i = 0; i < response.length; i++) {
                const {_hex} = response[i].tokenId;
                const _tokenId = parseInt(response[i].tokenId._hex);
                const _contractAddress = response[i].contractAddress;
                tempArray.push([_tokenId, _contractAddress]);
            }
                setVault(tempArray);
                console.log('vault', vault);
                tempArray = [];
                console.log(tempArray);
        } catch(err) {
            console.log('error: ', err);
        }
    }

     // Deposit Function //
     async function handleDeposit() {
        if(window.ethereum) {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            // Main Vault Contract Instance //
            const contract = new ethers.Contract(theVaultAddress, theVault.abi, signer);
            // ERC 721 NFT Contract Instance //
            const contractNft = new ethers.Contract(nftContractAddress, nftContract.abi, signer);

            const signerAddress = await signer.getAddress();
            const approveState = await contractNft.getApproved(nftTokenId);
            const isOwner = await contractNft.ownerOf(nftTokenId);
            
            try {              
                // Require ownership of token
                if( isOwner !== signerAddress) {
                    console.log('You do not own this token.');
                // Require approval of ERC721 transfer
                } else if(approveState == 0x0000000000000000000000000000000000000000) {
                    const tokenApprove = await contractNft.approve(theVaultAddress, nftTokenId);
                    console.log('response: ', tokenApprove);
                    await tokenApprove.wait();
                    const response = await contract.deposit(nftTokenId, nftContractAddress);
                    console.log('response: ', response);
                // Deposit to contract
                } else {
                    const response = await contract.deposit(nftTokenId, nftContractAddress);
                    console.log('response: ', response);
                    isTransactionMined(response.hash);
                  }                                        
               
            } catch(err) {
                console.log('error: ', err);
            }
        }
    }


    // Withdraw Function
    async function handleWithdraw() {
        if(window.ethereum) {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(theVaultAddress, theVault.abi, signer);

            try {
                const response = await contract.withdraw();
                setWithdrawLoading(true);
                console.log('response: ', response);  
                // fetch data
                const txHash = response.hash;
                const txData = await provider.waitForTransaction(txHash).then(provider.getTransactionReceipt(txHash));
                console.log("txData: ", txData);
                // retrieve tokenId and contractAddress
                const logs = txData.logs[1];
                const _tokenId = parseInt(logs.topics[3]);
                const _contractAddress = logs.address;
                console.log(_tokenId);
                console.log(_contractAddress);
                // update nft state
                setRandomNft([_tokenId, _contractAddress]);
                setWithdrawLoading(false);
                // trigger displayRandomNft popup
                setDisplayPopup(true);
                console.log(randomNft);
            } catch(err) {
                console.log('error: ', err);
                setWithdrawError(true);
                return (<Popup trigger={withdrawError} setTrigger={setWithdrawError}><Error/></Popup>) 
            }
        } 
    }

     // Get random Nft
     const displayRandomNft = () => {
        if(withdrawLoading == true) {
            return (<Popup trigger={withdrawLoading} setTrigger={setWithdrawLoading}><Loading color={color}/></Popup>) 
        } else return (<Popup trigger={displayPopup} setTrigger={setDisplayPopup}>
                        <RandomNft nft = {randomNft}/>
                        </Popup>) 
    }

    return ( 
        <>
            <div className="main-container">
                <div>
                    <HeaderInfo />
                    <button onClick={handleWithdraw}>Roll</button> 
                    <div>
                            <input 
                                type="text" 
                                required
                                value={nftTokenId}
                                onChange={(e) => setNftTokenId(e.target.value)}
                                placeholder='Enter Token Id' 
                            />
                            <input 
                                type="text"
                                required 
                                value={nftContractAddress}
                                onChange={(e) => setNftContractAddress(e.target.value)} 
                                placeholder='Enter Contract Address' />
                            <button onClick={handleDeposit}>Deposit</button>
                            <div>tokenId: {nftTokenId} contractAddress:{nftContractAddress} deposit status: {depositStatus}</div>

                            <button onClick={getArrayNfts}>show vault contents</button>
                            <button onClick={() => console.log(randomNft)}>random nft</button>
                            {displayRandomNft()}
                   
                    </div>
                </div>
                <TopCollections />
                <Link to="/vault-collection">View All</Link> 
                {displayRandomNft()}
            </div>
                
        </>
        
     );
}

export default Header;