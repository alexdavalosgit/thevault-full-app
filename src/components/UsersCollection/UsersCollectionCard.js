import React, { useState } from 'react';
import './UsersCollection.css';

const UsersCollectionCard = ({ nft }) => {

    return (
        <div className='collection-info'>
          <div className='img-container'>
            <img src={nft.meta.content[1].url} />
          </div>  
          <h3>{nft.meta.name} : #{nft.tokenId}</h3>
        </div>
        
      );
}

export default UsersCollectionCard;