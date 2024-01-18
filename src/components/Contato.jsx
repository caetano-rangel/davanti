import '../styles/components/contato.sass'
import { AiFillPhone, AiFillInstagram, AiFillEnvironment } from "react-icons/ai";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contato() {
  AOS.init();
    return (
      <div id="contato-box">
        <div data-aos= "fade-up" data-aos-duration="2000" className="info">
        <AiFillPhone id="phone-icon" />
            <div>
              <h3>Telefone</h3>
              <a className="p">(73) 99848-3936</a>
            </div>
        </div>
        <div data-aos= "fade-up" data-aos-duration="2000" className="info">
        <AiFillInstagram id='insta-icon'/>
            <div>
              <h3>Instagram</h3>
              <a className="p" href="https://www.instagram.com/remaxdavanti/" >@remaxdavanti</a>
            </div>
        </div>
        <div data-aos= "fade-up" data-aos-duration="2000" className="info">
        <AiFillEnvironment id="pin-icon" />
            <div>
              <h3>Localização</h3>
              <a className="p">BA - Arraial d'Ajuda - Rua Mucugê, 89</a>
            </div>
        </div>
      </div>
    )
  }

  export default Contato