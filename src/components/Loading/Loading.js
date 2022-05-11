import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";



const Loading = ({color}) => {
    return <div>
        <ClipLoader color={color} size={130}/>
        <h1>Fetching...</h1>
    </div>
                
}

export default Loading