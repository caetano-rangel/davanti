import '../styles/components/quemSomos.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from '../imagens/equipe.jpeg'

function QuemSomos() {
  AOS.init();
    return (
      <div id="somos-box">
        <p data-aos= "fade-up" data-aos-duration="2000" className='txt'>quem somos</p>
        <img data-aos= "fade-up" data-aos-duration="2000" src={image1} className='img-quem'/>
      </div>
    )
  }

  export default QuemSomos