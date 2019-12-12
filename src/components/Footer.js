import React, {Component} from 'react';
import '../assets-css/global.css'
import '../components/styles/footer.css'
import logo from '../assents-img/logo.svg'
import {Link} from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className='conteiner'>
                    <div className="footer-info-wrapper">
                        <div className='footer-info 1'>
                            <h3>Sobre nosotros</h3>
                            <hr/>
                            <Link href="#">Quienes somos</Link> <br/>
                            <Link href="#">Instalaciones</Link> <br/>
                        </div>
                        <div className='footer-info 2'>
                            <h3>Tratamientos</h3>
                            <hr/>
                            <Link href="#">Endodoncia</Link> <br/>
                            <Link href="#">Periodoncia</Link> <br/>
                            <Link href="#">Cirugia dental</Link> <br/>
                            <Link href="#">Implantes dentales</Link> <br/>
                            <Link href="#">Ortodoncia</Link>
                        </div>
                        <div className='footer-info 3'>
                            <h3>Contacto</h3>
                            <hr/>
                            <p>Dirección: Pozos de Santa Ana. <br/>
                                De la Iglesia Católica 300m norte <br/>
                                y 100m este. Sobre Calle Miramontes. <br/>
                                Teléfono: 2582-0782 <br/>
                                WhatsApp: 8353-5259 <br/>
                                Correo: info@dentalsoloeste.comb <br/>
                                </p>
                        </div>
                    </div>
                    <img className='logo-footer' src={logo} alt="logo"/> <br/>
                    {/* <img className='facebook-logo' src={require('./media/facebook-logo.svg')} alt="facebook"/> */}
                    <hr className='separator-footer'/>
                    <div className="footer-bottom">
                        <Link href="https://www.alex-lo.com">Design by alex</Link>
                        <p>© 2019 Clínica Sol Oeste. All rights reserved.</p>
                    </div>
                </footer>

            </React.Fragment>
        )
    }
}

export default Footer