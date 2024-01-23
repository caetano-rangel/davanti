import '../styles/components/titulo.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Titulo() {
    AOS.init();
    return (
      <div id='title'>
        <h1 data-aos= "fade-up" data-aos-duration="2000">Re/Max Davanti Deluxe</h1>
        <h3 data-aos= "fade-up" data-aos-duration="2000">Nosso foco está em proporcionar aos nossos clientes a Experiência do Máximo Serviço RE/MAX!</h3>
      </div>
    )
  }

  export default Titulo