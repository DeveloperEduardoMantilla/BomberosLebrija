import Slider from "../components/main/slider";
import Enlaces from "../components/main/Enlaces";
import Invitacion from "../components/main/Invitacion";
import Noticias from "../components/main/Noticias";
import Conozcanos from "../components/main/Conozcanos";
import PreguntasFrecuentes from "../components/main/PreguntasFrecuentes";

function Home() {
  return (
    <>
        <Slider/>
        <Enlaces/>
        <Invitacion/>
        <Noticias/>
        <Conozcanos/>
        <PreguntasFrecuentes/>
    </>
  )
}

export default Home;