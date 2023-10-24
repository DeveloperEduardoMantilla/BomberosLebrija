export default function Directory() {
  return (
    <>
    <div className="separador"></div>
        <div className="d-flex justify-content-center">
            <div id="carouselDirectorio" className="carousel carousel-dark slide col-12 " data-bs-ride="carousel">
                <div className="carousel-inner carousel_inner_directorio ">            
                <div className="carousel-item active" >
                    <div className="d-flex justify-content-center">
                        <div className="directorio_contact_info col-10">
                            <div className="col-12 col-md-4 img-contact">
                                <img src="https://img.freepik.com/psd-gratis/escena-bombero-camion-bomberos-ia-generativa_587448-1864.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais"/>
                            </div>
                            <div className="col-12 col-md-6 info-contact">
                                <h5>Andres Fabian</h5>
                                <h4>Administrativo</h4>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselDirectorio" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselDirectorio" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    <div className="separador"></div>
    </>
  )
}
