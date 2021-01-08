import './styles.css';
//As server pra renomear ReactComponent para Logo
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;