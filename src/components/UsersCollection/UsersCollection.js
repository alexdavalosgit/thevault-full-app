import LoginPrompt from '../AuthButton/LoginPrompt';
import UsersCollectionCard from './UsersCollectionCard';

const UsersCollection = ({ defaultAccount, isLoggedIn, nfts }) => {

  const checkLoggedIn = () => {
    if(defaultAccount !== '') {
      console.log('You are logged in');
      //setIsLoggedIn(true);
    } else {
      console.log("You are not logged in");
      //setIsLoggedIn(false);
    }
  }
 
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