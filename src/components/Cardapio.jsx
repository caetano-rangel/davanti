import '../styles/components/cardapio.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import imovel1 from '../imagens/patricia/casapatricia.jpg';
import imovel2 from '../imagens/orlando/casaorlando.jpg';
import imovel3 from '../imagens/juliana/casajuliana.jpg';
import imovel4 from '../imagens/sergio/sergio.jpeg';


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
                    <p>estrada dos macacos</p>
                    <p>15 dormitorios</p>
                    <p>R$2.990.000,00</p>
                </div>
            </div>
            <div className="cardapio">
                <div className="img-cardapio">
                <img src={imovel4}/>
                </div>
                <div className="txt-cardapio">
                    <p>Terreno no Eco Vilage</p>
                    <p>1.126m2</p>
                    <p>R$480.000,00</p>
                </div>
            </div>
            <div className="cardapio">
                <div className="img-cardapio">
                <img src={imovel3}/>
                </div>
                <div className="txt-cardapio">
                    <p>corais do arraial</p>
                    <p>3 dormitorios</p>
                    <p>R$1.650.000,00</p>
                </div>
            </div>
        </div>
        <div className="space">.</div>
        <div id="cardapio-box">
            <div className="cardapio">
                <div className="img-cardapio">
                    <img src={imovel1}/>
                </div>
                <div className="txt-cardapio">
                    <p>estrada da balsa</p>
                    <p>3 suítes</p>
                    <p>R$1.950.000,00</p>
                </div>
            </div>
            <div className="cardapio">
                <div className="img-cardapio">
                <img src={imovel2}/>
                </div>
                <div className="txt-cardapio">
                    <p>sítio panorama</p>
                    <p>4 dormitorios</p>
                    <p>R$1.490.000,00</p>
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