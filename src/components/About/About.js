import '../About/About.css'

function About() {
    return ( 
        
        <div className="about-container margin-ignore">
                <div className='about-item'>
                    <h3>Reach a new audience</h3>
                    <p>A creative way to gain exposure for your latest project.
                        Depositing to The Vault only takes a few clicks and will introduce your art to a new audience.
                    </p> 
                </div>
                
                <div className='about-item'>
                    <h3>Innovative way of art collecting</h3>
                    <p>Discover new art collections in a fun way, with an element of randomness.
                        You might fall in love with your next NFT.
                    </p>
                </div>
                
                <div className='about-item'>
                    <h3>Built for community</h3>
                    <p> Join our DAO to make decisions on what NFTs we purchase for The Vault. We are looking
                        to build a solution to connect relatively unknown artists and the NFT world. 
                    </p>
                </div>      
        </div>
       

        
      );
}

export default About;