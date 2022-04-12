import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import UsersCollection from './components/UsersCollection/UsersCollection';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  //const [accounts, setAccounts] = useState([]);
  // Wallet Connection Vars
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  // Main connection handler
  const connectWallet = async () => {
    // Make sure user installed Metamask
    if(window.ethereum) {
          // Check isLoggedIn bool
          if(isLoggedIn == false) {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
              setDefaultAccount(accounts[0]);
              connectHandler();
          } else {
            (isLoggedIn == true && defaultAccount == null) ? disconnectHandler(): window.alert('Please disconnect through Metamask first.');
          }
    } else { //Else user alerted to install Metamask
      setErrorMessage('You need to install Metamask');
      window.alert(errorMessage);
    }
  }

  // Establish Logged in logic
  const checkLoggedIn = () => {
    if(defaultAccount !== '') {
      console.log('You are logged in');
      //setIsLoggedIn(true);
    } else {
      console.log("You are not logged in");
      //setIsLoggedIn(false);
    }
  }
  // Connects address to site
  const connectHandler= () => {
    setConnButtonText('Disconnect');
    setIsLoggedIn(true);
  }
  // Disconnects address from site
  const disconnectHandler = () => {
    setConnButtonText('Connect Wallet');
    setIsLoggedIn(false);
  }
  // Handles account change
  window.ethereum.on("accountsChanged", async (accounts) => {
    setDefaultAccount(accounts[0]);
  });

  return (
    <div className="container">
      <Navbar
        defaultAccount = {defaultAccount}
        errorMessage = {errorMessage}
        setErrorMessage = {setErrorMessage}
        isLoggedIn = {isLoggedIn}
        connButtonText = {connButtonText}
        connectWallet = {connectWallet}
      />
      <Header 
        defaultAccount = {defaultAccount}
        setDefaultAccount = {setDefaultAccount}
      />
      <UsersCollection
        defaultAccount = {defaultAccount}
        isLoggedIn = {isLoggedIn}
      /> 
      <About/> 
      <Footer/>
    </div>
  );
}
export default App;