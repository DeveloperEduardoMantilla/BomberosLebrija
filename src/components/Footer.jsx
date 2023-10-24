import { FaChevronRight,FaMapPin,FaAddressBook,FaWindowMaximize  } from "react-icons/fa";

import footer from '../assets/img/footer/logo-footer.png';

export default function Footer() {
  return (
    <footer>
                <div className="contenido-footer">
                    <div className="box-footer">
                        <h1>NOS ENCUENTRAS EN:</h1>
                        <p><FaMapPin /> Calle. 8 #9, Lebrija, Santander</p>
                        <p><FaAddressBook />bomberoslebrija@gmail.com</p>
                        <p><FaWindowMaximize />6076567884</p>
                    </div>
                    <div className="box-footer">
                        <h1>ENLACES DE INTERÉS</h1>
                        <a  target="t_blank" href="https://santander.gov.co/"><FaChevronRight  /> Gobernación de Santander</a>
                        <a  target="t_blank" href="https://www.lebrija-santander.gov.co/Paginas/default.aspx"> <FaChevronRight  /> Alcaldia de Lebrija</a>
                        <a  target="t_blank" href="https://dnbc.gov.co/"> <FaChevronRight  /> DNBC</a>
                        <a  target="t_blank" href="https://www.essa.com.co/site/"> <FaChevronRight  /> ESSA</a>
                        <a  target="t_blank" href="https://www.contraloria.gov.co/"> <FaChevronRight  /> Contraloria</a>
                    </div>
                    <div className="box-footer d-flex align-items-center">
                        <img src={footer} alt=""></img>
                    </div>
                </div>
            </footer>
  )
}