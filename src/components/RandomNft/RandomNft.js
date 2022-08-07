import React, { useState, useEffect } from 'react';
import '../RandomNft/RandomNft.css'

const RandomNft = ({nft, image, name, randomTxHash}) => {
  
  return (
    <article className='review'>
      <h4 className='job'>Congratulations! You have received token #{nft[0]} from
      the {name} collection!</h4> 
      <div className='img-container'>
        {image ? <img 
              src="https://ipfs.io/ipfs/QmYrxAviWHGugdikgU1Awc8MRtfqxMYYRmBuCTMEc5mCAx"
              alt='random nft'
              className='person-img' /> : 
              <div className="error-image"><h4>could not find your image</h4></div>}
      </div>
      <a href={`https://rinkeby.etherscan.io/tx/${randomTxHash}`} className="author">View Transaction</a>
  </article>
  )
};

export default RandomNft;