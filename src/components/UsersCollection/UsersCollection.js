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
    <>
      <div className='collection-text'>
        <h3> MY NFTS</h3>
      </div>
      <div className='collection-container'>
          {nfts.map((nft, index) => {
            return <UsersCollectionCard nft={nft} key={index}/>
          })}
      </div>
     {/*  <div className='collection'>
        <UsersCollectionCard/>
      </div> */}
   
    </>
   
  )
};

export default UsersCollection;