export default function slider() {
return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/psd-gratis/escena-bombero-camion-bomberos-ia-generativa_587448-1864.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais" alt="Slider bomberos"></img>
                </div>
                <div className="carousel-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Aircraft_Rescue_Firefighting_training.jpg/1200px-Aircraft_Rescue_Firefighting_training.jpg" alt="Slider bomberos"></img>
                </div>
                <div className="carousel-item">
                    <img src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2021/10/bombero-con-hacha.jpg" alt="Slider bomberos"></img>
                </div>
                <div className="carousel-item">
                    <img src="https://media.primicias.ec/2022/05/20163456/portada-B.jpg" alt="Slider bomberos"></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="capa-slider-inicio">
        </div>
    </div>
    </>
)
}
