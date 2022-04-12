import LoginPrompt from '../AuthButton/LoginPrompt';
import UsersCollectionInfo from './UsersCollectionInfo';

const UsersCollection = ({ defaultAccount, isLoggedIn }) => {
 
  return (
    <>
       {isLoggedIn? (
         <UsersCollectionInfo
            defaultAccount = {defaultAccount}
            isLoggedIn = {isLoggedIn}
         />
       ): (
         <LoginPrompt/>
       )} 
    </>  
  )
};

export default UsersCollection;