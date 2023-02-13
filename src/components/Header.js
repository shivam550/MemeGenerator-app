import '../styles/Header.css';
import troll from '../images/Troll Face.png';

function Header() {
    return (
        <div className='header'>
            <img src={troll} className='logo' alt='logo-img' />
            <h2 className='heading'>Meme Generator</h2>
            <p className='header-project'>React Course - Project 3</p>
        </div>
    )
}

export default Header;