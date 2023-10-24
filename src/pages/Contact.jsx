import {FaMap, FaCodepen} from "react-icons/fa";

export default function Contact() {
  return (
    <>
    <div className="separador"></div>
        <div className="container">
            <div className="linea-contacto">
                <div className="box-contacto-1">
                    <h1> <FaMap className="FaMap"/> <span style={{color: "orange"}}>Google</span> Maps</h1>
                    <br></br>
                    <h3>Lugares de Referencia</h3>
                            <div>
                                <p>descripcion</p>
                                <h3>Fijo</h3>
                                <p>telefono fijo</p>
                                <h3>Celular</h3>
                                <p>telefono celular</p>
                                <h3>E-mail</h3>
                                <p>Email</p>
                                <h3>Direccion</h3>
                                <p>Direccion</p>
                            </div>
                </div>
                <div className="box-contacto-1">
                    <h1><FaCodepen className="FaMap"/>Dependencias</h1>
                            <div className="box-dependencias">
                                <div className="box-dependencias-md1">
                                    <img alt=""  src="https://img.freepik.com/psd-gratis/escena-bombero-camion-bomberos-ia-generativa_587448-1864.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais"></img>
                                </div>
                                <div className="box-dependencias-md2">
                                    <h1>Nombre</h1>
                                    <h1>Email</h1>
                                    <h1>Telefono</h1>
                                </div>
                            </div>

                    
                </div>
            </div> 
        </div>

        <div className="separador"></div>
    </>
  )
}
