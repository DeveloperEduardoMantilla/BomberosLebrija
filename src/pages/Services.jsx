import { NavLink} from "react-router-dom";

export default function services() {
  return (
    <>
    <div className="separador"></div>
        <div className="servicios">
            <div className="container">
                <div className="servicios-info">
                    <div className="servicios-info-contenido">
                        <h1> <span>Nuestros Servicios </span> </h1>
                        <p>Los bomberos no solo apagamos incendios, para toda la comunidad y establecimientos comerciales de nuestro municipio, contamos con personal idóneamente capacitado para prestar eficiente y eficazmente los siguientes servicios</p>
                    </div>
                </div>
                <div className="servicios-brindados">
                    <div className="servicio-bomberos">
                        <div className="servicios-bomberos-contenido">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error voluptas cupiditate velit qui dolores, suscipit ex delectus reiciendis harum rerum earum. Neque est qui facere asperiores voluptatibus enim ab magni tenetur quos doloribus aliquid quasi quidem labore ea hic eos, corrupti veniam placeat quis. Atque reiciendis illo libero inventore!</p>
                            <NavLink className="btn btn-solicitar btn-sm" to="serviciosForm"> Solicitar</NavLink>
                        </div>
                        <div className="servicios-bomberos-img">
                            <img src="https://img.freepik.com/psd-gratis/escena-bombero-camion-bomberos-ia-generativa_587448-1864.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais" alt="Servicios Bomberos"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="separador">    
    </div>
    </>
    
  )
}
