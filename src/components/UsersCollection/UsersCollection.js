import LoginPrompt from '../AuthButton/LoginPrompt';
import UsersCollectionCard from './UsersCollectionCard';

const UsersCollection = ({ defaultAccount, isLoggedIn, nfts }) => {
 
  return (
    <div>
      <h3 className='job'> My NFTs:</h3>
        <div className='collection'>
            {nfts.map((nft, index) => {
              return <UsersCollectionCard nft={nft} key={index}/>
            })}
        </div>
      
    </div>
  )
};

export default UsersCollection;