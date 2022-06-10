import React, { useState, useEffect } from 'react';
import '../RandomNft/RandomNft.css'

const RandomNft = ({nft, image, name}) => {
  
  return (
    <article className='review'>
      <h4 className='job'>You have received:</h4> 
      <div className='img-container'>
        {image ? <img 
              src="https://ipfs.io/ipfs/QmYrxAviWHGugdikgU1Awc8MRtfqxMYYRmBuCTMEc5mCAx"
              alt='random nft'
              className='person-img' /> : <p className='image-error'>error: could not retrieve image</p>}
      </div>
      <h4 className='author'>#{nft[0]} - name: {name}</h4>
  </article>
  )
};

export default RandomNft;