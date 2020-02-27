import React, {Component} from 'react';
import '../assets-css/global.css'
import '../components/styles/form.css'

class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-wrapper ">
                    <div className="form-info">
                        <h4>Contactenos</h4>
                        <h3>Realize su consulta</h3>
                        <hr/>
                        <p> <b> Ubicación:  </b> <br/>
                        Pozos de Santa Ana. 
                        De la Iglesia Católica 300m norte
                        y 100m este. Sobre Calle Miramontes. <br/>
                        <br/>
                        <b> Correo electronico: </b> <br/>
                        correo@gmail.com <br/>
                        <b>Telefono:</b> <br/>
                        2442-4242 / 4242-4242
                        </p>
                    </div>
                    <div className="form-section">
                        <br/>
                        <h3>Formulario de contacto:</h3>
                        <hr/>
                        <form className='form' method="POST" action="/Contacto" data-netlify="true">
                        <label>
                            <input placeholder='Nombre' type="text" name='nombre'/>
                        </label>
                        <label>
                            <input placeholder='Número' type="text" name='numero'/>
                        </label>
                        <label>
                            <input placeholder='Correo electrónico' type="text" name='correo-electronico'/>
                        </label> <br/>
                        <label>
                            <textarea placeholder='Detalle:' name="Mensaje:" id="" cols="40" rows="2"></textarea>
                        </label>
                        <br/>
                        <button className='buttonGreen' type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default Form