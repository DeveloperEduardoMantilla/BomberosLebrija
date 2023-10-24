import {NavLink} from 'react-router-dom';
import peticion from '../assets/img/pqrds/peticion.png';
import queja from '../assets/img/pqrds/queja.png';
import reclamo from '../assets/img/pqrds/reclamo.png';
import sugerencia from '../assets/img/pqrds/sugerencia.png';
import denuncia from '../assets/img/pqrds/denuncia.png';
import solicitudInfo from '../assets/img/pqrds/solicitudinformacion.png';
import SliderMessage from '../components/SliderMessage';


export default function Pqrds() {
  return (
    <>
        <SliderMessage/>
        <div className="separador"></div>
            <div className="container">
                <div className="pqrds">
                    <h2>Sistema de PQRSD</h2>
                    <div className="alert alert-danger intro-pqrds" role="alert">
                        <p>Sistema de presentación y consulta de Preguntas, Quejas, Reclamos, Sugerencias y Denuncias de la Dirección Nacional de Bomberos de Colombia. <br></br>
                        <br></br>Por favor tenga en cuenta las siguientes definiciones para establecer el tipo de solicitud a presentar y los términos de respuesta.</p>
                    </div>
                    <div className="item-pqrds">
                        <img src={peticion} alt="Peticion"></img>
                        <div className="info-pqrds">
                            <h1>Petición</h1>
                            <p>Es el derecho fundamental que tiene toda persona a presentar solicitudes respetuosas a las autoridades por motivos de interés general o particular y a obtener su pronta resolución.</p>
                        </div>
                    </div>
                    <div className="item-pqrds">
                        <img src={queja} alt="Peticion"></img>
                        <div className="info-pqrds">
                            <h1>Queja</h1>
                            <p>Es la manifestación de protesta, censura, descontento o inconformidad que formula una persona en relación con una conducta que considera irregular de uno o varios servidores públicos en desarrollo de sus funciones.
                            </p>
                        </div>
                    </div>
                    <div className="item-pqrds">
                        <img src={reclamo} alt="Peticion"></img>
                        <div className="info-pqrds">
                            <h1>Reclamo</h1>
                            <p>Es el derecho que tiene toda persona de exigir, reivindicar o demandar una solución, ya sea por motivo general o particular referente a la prestación indebida de un servicio o a la falta de atención de una solicitud.
                            </p>
                        </div>
                    </div>
                    <div className="item-pqrds">
                        <img src={sugerencia} alt="Peticion"></img>
                        <div className="info-pqrds">
                            <h1>Sugerencia</h1>
                            <p>Es la manifestación de una idea o propuesta para mejorar el servicio o la gestión de la entidad.
                            </p>
                        </div>
                    </div>
                    <div className="item-pqrds">
                        <img src={denuncia} alt="Peticion"></img>
                        <div className="info-pqrds">
                            <h1>Denuncia</h1>
                            <p>Es la puesta en conocimiento ante una autoridad competente de una conducta posiblemente irregular, para que se adelante la correspondiente investigación penal, disciplinaria, fiscal, administrativa – sancionatoria o ético profesional.
                            </p>
                        </div>
                    </div>
                    <div className="item-pqrds">
                        <img src={solicitudInfo} alt="Peticion"></img>
                        <div className="info-pqrds">
                            <h1>Solicitud de información</h1>
                            <p>Petición formulada para acceder a información pública, sin necesidad de que los solicitantes acrediten su personalidad, el tipo de interés, las causas por las cuáles presentan su solicitud los fines a los cuales habrán de destinar los datos solicitados.
                            </p>
                        </div>
                    </div>
                    <div className="acciones-pqrds">
                        {/*<div className="accion1-pqrds">
                            <p>Puede hacer seguimiento a la respuesta de la PQRSD ingresando el código o radicado en el siguiente link:</p>
                            <NavLink to="ConsultarPqrds" className="btn btn-success">Consultar Pqrds</NavLink>
                        </div>*/}
                        <div className="accion1-pqrds">
                            <p>Inicie el proceso de radicación de su PQRSD teniendo en cuenta el tipo de solicitud que desea generar.  Ingrese en el siguiente link:</p>
                            <NavLink to="SolicitarPqrds" className="btn btn-dark">Presentar Pqrds</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        <div className="separador"></div>
    </>
  )
}
