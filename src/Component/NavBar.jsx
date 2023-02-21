import Logo from './Resource/Logo.png'
import './Resource/NavBar.css';
import CartWidget from './CartWidget';
import Categorias from './Categorias';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
            <nav className='navbar navbar-expand-lg sticky-top NavBarContent'>
                <div className='container-fluid'>
                <Link className='navbar-brand' to={'/'}><img src={Logo} alt='Logo DeModa' width='80' height='64'></img></Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='true' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 fs-4'>
                            <Categorias />
                        <li className='nav-item'>
                        <a className='nav-link' href='/'>Nosotros</a>
                        </li>
                        </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar;