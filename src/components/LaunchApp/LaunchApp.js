import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LaunchApp.css'

const LaunchApp = () => {
    let navigate = useNavigate();
    return(
        <div className="launch-container">
            <div className="launch-app"> <h1>welcome to the vault</h1></div>
            <div>
                <button onClick={() => {
                    navigate('/home');
                }}
                className="button-main"
                >Launch App</button>
            </div>
        </div>
        
    )     
}

export default LaunchApp;

