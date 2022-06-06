import twitter from '../../images/twitter.svg'
import telegram from '../../images/telegram.svg'
import '../Navbar/Navbar.css'

function Footer() {
    return ( 
        <div className="social-media">
         <h5>THIS IS THE FOOTER - THE VAULT 2022</h5>
        <a href='https://twitter.com'> 
            <img src={twitter} alt="twitter"/> 
        </a> 
        <a href='https://telegram.org'>
            <img src={telegram} alt="telegram"/> 
        </a>
    </div>
     );
}

export default Footer;