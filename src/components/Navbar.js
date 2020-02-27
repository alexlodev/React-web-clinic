import React, {Component} from 'react';
import './styles/navbar.css'
import logo from '../assents-img/logo.svg'
import {Link, NavLink} from 'react-router-dom'
import Media from 'react-media'
import {  TweenLite } from 'gsap';


class Navbar extends Component {
    
    openMenu= ()=> {
        const menu = document.querySelector('.menu-mobile')
        TweenLite.to(menu,0.2, { left: 0,width: 275 });
        
        
    }
    closeMenu= ()=> {
        const menu = document.querySelector('.menu-mobile')
        TweenLite.to(menu,1, { left: -1000, width:0});
        
        
    }
    render() {
        
        return (
            <React.Fragment>
                <Media query={{maxWidth:838}}>
                
                <div className='nav'> {/*Mobile Menu*/}
                    <div className="menu-wrapper">
                    <div onClick={this.openMenu} className='buttonOpen'>
                            <span>&nbsp;</span>
                            <span>&nbsp;</span>
                            <span>&nbsp;</span>
                    </div>
                    <Link to="/">
                    <img className='logo' src={logo} alt=""/>
                    </Link>

                    </div>
                    <div className="menu-mobile">
                    <div onClick={this.closeMenu} className='buttonClose'>
                            <span className='first' ></span>
                            <span className='second'></span>
                    </div>
                    <ul id='menu' className='menu-list'> 
                        <h3>Menu</h3>
                        <hr/>
                        <Link to='/'>Inicio</Link> <br/>
                        <Link to='/Nosotros' >Sobre nosotros</Link> <br/>
                        <Link to='/tratamientos'>Tratamientos</Link> <br/>
                        <Link to='/Instalaciones'>Instalaciones</Link> <br/>
                        <Link to='/Contacto' >Contacto</Link><br/>
                    </ul>
                    <div className="footer-menu">
                    <img className='logo' src={logo} alt=""/>
                        <div className="contact-info-footer">
                        <h3>Contactenos</h3>
                        <hr/>
                        <br/>
                        <h3>2323-2323 / 8736-8734</h3>

                        </div>
                     </div>
                     </div>
                    </div>
                </Media> 
                <Media query={{minWidth:839}}>

                <nav className='nav'> {/*Desktop Menu*/}
                    <div className="menu">
                    <ul> 
                    <img className='logo' src={logo} alt=""/>
                        <NavLink to="/Contacto">Contacto</NavLink> 
                        <NavLink to="/Instalaciones">Instalaciones</NavLink> 
                        <NavLink to='/tratamientos'> Tratamientos </NavLink>
                        <NavLink to="/Nosotros">Sobre nosotros</NavLink>
                        <NavLink activeClassName='active'to='/'> Inicio </NavLink>
                    </ul>
                    </div>
                </nav>

                </Media>
            </React.Fragment>
        );
    }
}

export default Navbar;
