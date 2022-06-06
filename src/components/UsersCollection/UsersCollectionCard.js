import React, { useState } from 'react';
import './UsersCollection.css';
import nftpic from '../../images/nft.png'

const UsersCollectionCard = ({ nft }) => {

    return (
        <div className='collection-info'>

            <div className='collection-img-container'>
              {/* <img src={nft.meta.content[1].url} /> */}
              <img src={nftpic} alt="nft image"/>
            </div>

            <div className='collection-img-text'>
                {/* <h3>{nft.meta.name} : #{nft.tokenId}</h3> */}
                <h3>#100</h3>
                <p>address: 0xsdsonfdjksfnlw-1932</p>
            </div>  
            
        </div>
        
        
      );
}

export default UsersCollectionCard;