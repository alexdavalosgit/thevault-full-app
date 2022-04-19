import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import LaunchApp from './components/LaunchApp/LaunchApp';
import './App.css';
import TopCollections from './components/TopCollections/TopCollections';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  return (
    <Router>
          <nav>
            The Vault Navbar <br/>
            <Link to="/home">Home</Link> <br/>
            <Link to="/vaultcollection">View Vault</Link>  <br/>
          </nav>
        <Routes>
          <Route path="/home" element={<Home
                                         defaultAccount = {defaultAccount}
                                         errorMessage = {errorMessage}
                                         setErrorMessage = {setErrorMessage}
                                         isLoggedIn = {isLoggedIn}
                                         connButtonText = {connButtonText}
                                         connectWallet = {connectWallet}
                                         />}></Route>
          <Route path="/vaultcollection" element={<TopCollections/>}></Route>
        </Routes>
    </Router>
   
  );
}
export default App;