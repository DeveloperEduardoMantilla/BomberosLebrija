import { NavLink } from 'react-router-dom';
import img from "../../assets/img/main/bombero.png";

export default function Invitacion() {
  return (
    <div className="convocatoria">
                        <div className="contenido-convocatoria">
                            <div className="title-convocatoria">
                                <h1>¿Quieres hacer parte de nuestro equipo de trabajo?</h1>
                            </div>
                            <div className="text-convocatoria">
                                <p>Recibe el respaldo de una institución con mas de 20 años de experiencia en el servicio a la comunidad de Lebrija. Vincúlate como Voluntario si cumple los siguientes requisitos:</p>
                                <h1>Requisitos:</h1>
                                <ul>
                                    <li>Tener mínimo 18 años de Edad</li>
                                    <li>Ser ciudadano Colombiano o extranjero con cédula de extranjería</li>
                                    <li>Tener definida la situación militar</li>
                                    <li>Ser bachiller como mínimo</li>
                                    <li>Aprobar el proceso de selección estipulado por la institución</li>
                                    <li>No tener antecedentes judiciales</li>
                                    <li>Cursar y aprobar el curso de formación de Bombero I con una intensidad de 310 horas</li>
                                </ul>
                            </div>
                            <div className="boton-contacto">
                                <NavLink className="btn btn-sm btn-light" to="contact"> Contactanos</NavLink>
                            </div>
                        </div>
                        <div className='convocatoria-img d-none d-lg-block'>
                            <img src={img}/>
                        </div>
                </div>
  )
}