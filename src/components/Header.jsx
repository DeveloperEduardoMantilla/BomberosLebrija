import { NavLink } from 'react-router-dom';
import imgLogo from '../assets/img/logo.png';
import { FaFacebook,FaInstagram,FaYoutube,FaPhoneVolume,FaEnvelope} from "react-icons/fa";

export default function Header() {
  return (
    <header>
            <div className='header-first-small'>
                <h1>Número de emergencias: 6076567884</h1>
            </div>
            <div className='header-first'>
                <div className='container-first'>
                <div className='header-address'>
                    <h1>Calle. 8 #9, Lebrija, Santander</h1>
                </div>
                <div className='header-social'>
                    <div className='header-redes'>
                        <div><a target="_blank" rel="noreferrer" href="#"><FaFacebook/></a></div>
                        <div><a target="_blank" rel="noreferrer" href="#"><FaInstagram/></a></div>
                        <div><a target="_blank" rel="noreferrer" href="#"><FaYoutube/></a></div>
                    </div>
                    <div className='header-contacto'>
                        <h1>Número de emergencias: 6076567884 </h1>
                    </div>
                </div>
                </div>
            </div>
            <div className='header-second'>
                <div className='header_second_logo'>
                    <img src={imgLogo}></img>
                </div>
                <div className='header_second_contact'>
                        <div className='contact_header'>
                            <div className='icon-contact'>
                                <FaPhoneVolume />
                            </div>
                            <div className='linea-contact'>
                                <h3>Linea</h3>
                                <p>6076567884</p>
                            </div>
                        </div>
                        <div className='contact_header'>
                            <div className='icon-contact'>
                                <FaEnvelope />
                            </div>
                            <div className='linea-contact'>
                                <h3>Correo</h3>
                                <p>eduardoma@gmail.com</p>
                            </div>
                        </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand d-lg-none" href="#"><img src={imgLogo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    
                        <NavLink className="nav-link " activeClassName="active-menu" to="/">Inicio</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/services">Servicios</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/news">Noticias</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/emergencies">Emergencias</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/contact">Contacto</NavLink>
                        {/*<a className="nav-link" target="_blank" rel="noreferrer" activeClassName="active-menu" href="https://intranet-lebrija.herokuapp.com/">Intranet</a>*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tramites 
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="pqrds">Pqrds</NavLink>
                            <NavLink className="dropdown-item" to="paymentsform">Pagos</NavLink>
                            <NavLink className="dropdown-item" to="servicesform">Servicios</NavLink>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}
