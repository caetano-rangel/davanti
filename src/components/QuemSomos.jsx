import '../styles/components/quemSomos.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from '../imagens/equipe.jpeg'

function QuemSomos() {
  AOS.init();
    return (
      <div id="somos-box">
        <p data-aos= "fade-up" data-aos-duration="2000" className='txt1'>Quem somos</p>
        <img data-aos= "fade-up" data-aos-duration="2000" src={image1} className='img-quem'/>
        <p data-aos= "fade-up" data-aos-duration="2000" className='txt2'>A equipe da Remax Davanti é um grupo dedicado de profissionais imobiliários que se destacam pela 
        sua paixão, experiência e comprometimento. <br></br><br></br><br></br> A integridade, transparência e o foco na 
        excelência são os pilares que impulsionam a Remax Davanti a oferecer serviços imobiliários excepcionais, 
        indo além das expectativas para criar relações sólidas e duradouras com os clientes.</p>
      </div>
    )
  }

  export default QuemSomos