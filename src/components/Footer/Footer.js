import twitter from '../../images/twitter.svg'
import telegram from '../../images/telegram.svg'
import github from '../../images/github.svg'
import '../Navbar/Navbar.css'
import '../Footer/Footer.css'

function Footer() {
    return ( 
        <div className="footer">
            <div className="f1">
            <h2>@ THE VAULT. 2022.</h2>
            </div>
         <div className='f2'>
            <h5>Connect with us:</h5>
            <a href='https://twitter.com/TheVaultEth'> 
                <img src={twitter} alt="twitter"/> 
            </a> 
            <a href='https://telegram.org'>
                <img src={telegram} alt="telegram"/> 
            </a>
            <a href='https://github.com'>
                <img src={github} alt="github"/> 
            </a>
         </div>
         
    </div>
     );
}

export default Footer;