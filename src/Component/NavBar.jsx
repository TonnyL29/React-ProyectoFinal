import Logo from './Resource/Logo.png'
import './Resource/NavBar.css';
import CartWidget from './CartWidget';
import Categorias from './Categorias';

const NavBar = () => {

    return (
            <nav className="navbar navbar-expand-lg sticky-top NavBarContent">
                <div className="container-fluid">
                <a className="navbar-brand" href="#home"><img src={Logo} alt="Logo DeModa" width="80" height="64"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
                        <li className="nav-item">
                            <a className="nav-link active ms-3" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                        <ul className="dropdown-menu me-3" id="dropdown-menu">
                            <Categorias />
                        </ul>
                        </li>
                        </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar;