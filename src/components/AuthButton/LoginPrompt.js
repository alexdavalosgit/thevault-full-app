import '../UsersCollection/UsersCollection.css'
import "../UsersCollection/UsersCollection.css"

function LoginPrompt() {
    return (
  
        <article className='collection-container'>
            <div className='img-container'>
                <img 
                src='https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png' 
                alt='metamask logo'
                className='person-img'
                />
                <h4>Please connect a wallet to view your nfts...</h4>
            </div>
            
        </article>
        
      );
}

export default LoginPrompt;