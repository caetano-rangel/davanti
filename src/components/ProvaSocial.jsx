import '../styles/components/prova.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from '../imagens/patricia.jpeg'
import image2 from '../imagens/orlando.jpeg'
import image3 from '../imagens/juliana.jpeg'
import image4 from '../imagens/patricia.jpeg'

function ProvaSocial() {
  AOS.init();
    return (
      <div id="container">
        <div data-aos= "fade-up" data-aos-duration="2000" class="img-container">
          <img src={image1}></img>
        </div>
        <div data-aos= "fade-up" data-aos-duration="2000" class="img-container">
          <img src={image2}></img>
        </div>
        <div data-aos= "fade-up" data-aos-duration="2000" class="img-container">
          <img src={image3}></img>
        </div>
      </div>
    )
  }

  export default ProvaSocial