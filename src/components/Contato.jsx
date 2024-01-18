import '../styles/components/contato.sass'
import { AiFillPhone, AiFillInstagram, AiFillEnvironment } from "react-icons/ai";

function Contato() {
    return (
      <div id="contato-box">
        <div className="info">
        <AiFillPhone id="phone-icon" />
            <div>
              <h3>Telefone</h3>
              <a className="p">(73) 99848-3936</a>
            </div>
        </div>
        <div className="info">
        <AiFillInstagram id='insta-icon'/>
            <div>
              <h3>Instagram</h3>
              <a className="p" href="https://www.instagram.com/" >@remaxdavanti</a>
            </div>
        </div>
        <div className="info">
        <AiFillEnvironment id="pin-icon" />
            <div>
              <h3>Localização</h3>
              <a className="p">BA - Arraial d'Ajuda - Rua Mucugê, 89, Centro</a>
            </div>
        </div>
      </div>
    )
  }

  export default Contato