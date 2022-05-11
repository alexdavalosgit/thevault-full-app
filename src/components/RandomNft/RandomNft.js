import React, { useState, useEffect } from 'react';


const RandomNft = ({nft}) => {
  
  return (
    <article className='review'>
      <h4 className='job'>You have received:</h4> 
      <br/>
      <div className='img-container'>
          <img 
              src='https://lh3.googleusercontent.com/Tb9qXcO07HjoBbXA2CmsOVTO46m4eTI5EHlb3sSBvmtpTbVXg2MvKefsxSApVIWrojkqXPHhrRX7UMpbeL7sgGKPkwUpp6asplx7dio=s0'
              alt='BORED APE #1166'
              className='person-img'
          />
      </div>
      <h4 className='author'>#{nft[0]} - CA: {nft[1]}</h4>
  </article>
  )
};

export default RandomNft;