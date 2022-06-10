import React, { useState } from 'react';
import './UsersCollection.css';


const UsersCollectionCard = ({ nft }) => {

    return (
        <div className='card'>
            <div className='card-img'>
              <img src={nft.meta.content[0].url} />
              {/* <img src={nftpic} alt="nft image"/> */}
            </div>
            <div className='collection-img-text'>
                <h3>Name: {nft.meta.name} </h3>
                
                {/* <h3>#100</h3>
                <p>address: 0xsdsonfdjksfnlw-1932</p> */}
            </div>  
        </div>
        
        
      );
}

export default UsersCollectionCard;