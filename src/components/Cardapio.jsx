import '../styles/components/cardapio.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import imovel1 from '../imagens/patricia.jpeg';
import imovel2 from '../imagens/orlando.jpeg';
import imovel3 from '../imagens/juliana.jpeg';


function Cardapio() {
  AOS.init();

    return (
      <div data-aos= "fade-up" data-aos-duration="1000">
        <h1 className='titulo-card'>Casas e Áreas</h1>
        <div id="cardapio-box">
            <div className="cardapio">
                <div className="img-cardapio">
                    <img src={imovel1}/>
                </div>
                <div className="txt-cardapio">
                    <p>img teste</p>
                    <p>texto imovel1</p>
                </div>
            </div>
            <div className="cardapio">
                <div className="img-cardapio">
                <img src={imovel2}/>
                </div>
                <div className="txt-cardapio">
                    <p>img teste</p>
                    <p>texto imovel2</p>
                </div>
            </div>
            <div className="cardapio">
                <div className="img-cardapio">
                <img src={imovel3}/>
                </div>
                <div className="txt-cardapio">
                    <p>img teste</p>
                    <p>texto imovel3</p>
                </div>
            </div>
        </div>
      </div>
    )
}

  export default Cardapio