export default function News() {
  return (
    <>
    <div className="separador"></div>
            <div className="container">
                <div className="pag-noticias">
                    <div className="d-flex align-items-center flex-wrap justify-content-center">
                        <h1> <strong>Publicaciones</strong><br/>en nuestro Blog</h1>
                        <p>Manténgase actualizado con nuestras más recientes publicaciones.</p>
                    </div>
                    <hr></hr>
                    <a href="https://img.freepik.com/psd-gratis/escena-bombero-camion-bomberos-ia-generativa_587448-1864.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais" className="pag-noticias-box">
                        <div className="pag-img">
                            <img src="https://img.freepik.com/psd-gratis/escena-bombero-camion-bomberos-ia-generativa_587448-1864.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais" alt=""></img>
                        </div>
                        <div className="pag-noticia">
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>24/10/2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nam necessitatibus quas inventore perspiciatis aut, magni, eligendi numquam dolorum unde doloremque velit, fuga asperiores dignissimos. Fugit qui perferendis delectus nostrum.</p>
                            <p className="btn-ver">Ver Mas</p>
                        </div>
                    </a>     
                </div>
            </div>
        <div className="separador"></div>
    </>
  )
}
