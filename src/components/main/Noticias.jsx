import { Link } from "react-router-dom";

export default function Noticias() {
  return (
    <>
        <div className="separador">
        </div>
        <div className="enterate">
            <div className="container">
                    <div className="box-enterate-contenido">
                        <div className="enterate-titulo">
                            <p>Publicaciones en <br/><strong>nuestro Blog</strong></p>
                            <div className="enterate-titulo-content">
                                <p>Manténgase actualizado con nuestras más recientes publicaciones.</p>
                                <Link to={"noticias"} className="button_enterate">Ver Mas</Link>
                            </div>
                        </div>
                        <div className="noticias-inicio">
                        <a href="https://media.primicias.ec/2022/05/20163456/portada-B.jpg" className="noticia-inicio">
                            <div className="noticia-inicio-contenido">
                                <div className="noticia-inicio-img">
                                <img  src="https://media.primicias.ec/2022/05/20163456/portada-B.jpg" alt="contenido fallo" width="100%"></img>
                                </div>
                                <div className="noticia-contenido">
                                    <h2>Noticia de ultima hora</h2>
                                    <h3>Fecha Publicación: 24/10/2023</h3>
                                    <p className="limitado">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolor nostrum placeat sint dicta molestiae vitae autem id excepturi, et quisquam aliquam accusantium ipsam modi, minus, ea magni hic dolorum?</p>
                                    <p className="btn-ver">Ver Mas</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://media.primicias.ec/2022/05/20163456/portada-B.jpg" className="noticia-inicio">
                            <div className="noticia-inicio-contenido">
                                <div className="noticia-inicio-img">
                                <img  src="https://media.primicias.ec/2022/05/20163456/portada-B.jpg" alt="contenido fallo" width="100%"></img>
                                </div>
                                <div className="noticia-contenido">
                                    <h2>Noticia de ultima hora</h2>
                                    <h3>Fecha Publicación: 24/10/2023</h3>
                                    <p className="limitado">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolor nostrum placeat sint dicta molestiae vitae autem id excepturi, et quisquam aliquam accusantium ipsam modi, minus, ea magni hic dolorum?</p>
                                    <p className="btn-ver">Ver Mas</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://media.primicias.ec/2022/05/20163456/portada-B.jpg" className="noticia-inicio">
                            <div className="noticia-inicio-contenido">
                                <div className="noticia-inicio-img">
                                <img  src="https://media.primicias.ec/2022/05/20163456/portada-B.jpg" alt="contenido fallo" width="100%"></img>
                                </div>
                                <div className="noticia-contenido">
                                    <h2>Noticia de ultima hora</h2>
                                    <h3>Fecha Publicación: 24/10/2023</h3>
                                    <p className="limitado">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolor nostrum placeat sint dicta molestiae vitae autem id excepturi, et quisquam aliquam accusantium ipsam modi, minus, ea magni hic dolorum?</p>
                                    <p className="btn-ver">Ver Mas</p>
                                </div>
                            </div>
                        </a>
                        </div>
                        <div className="w-100 d-flex justify-content-center pt-5">
                        </div>
                    </div>
            </div>

        </div>
    </>
  )
}




