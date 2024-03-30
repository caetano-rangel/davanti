import '../styles/components/cardapio.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import imovel1 from '../imagens/patricia/casapatricia.jpg';
import imovel2 from '../imagens/orlando/casaorlando.jpg';
import imovel3 from '../imagens/juliana/casajuliana.jpg';
import imovel4 from '../imagens/sergio/sergio.jpeg';
import imovel5 from '../imagens/jefferson/jefferson2.jpeg';
import imovel6 from '../imagens/beth/beth.jpeg';

function Cardapio() {
  AOS.init();

  const handleWhatsAppClick = (link) => {
    const whatsapp = '73998483936';
    const message = `Gostaria de mais informações sobre o imóvel: ${link}`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className='titulo-card'>Casas e Áreas</h1>
      <div id="cardapio-box">
        <div className="cardapio" onClick={() => handleWhatsAppClick('Estrada dos Macacos')}>
          <div className="img-cardapio">
            <img src={imovel1} alt="Imóvel 1"/>
          </div>
          <div className="txt-cardapio">
            <p>Estrada dos Macacos</p>
            <p>15 dormitórios</p>
            <p>R$2.990.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('Terreno no Eco Vilage')}>
          <div className="img-cardapio">
            <img src={imovel4} alt="Imóvel 4"/>
          </div>
          <div className="txt-cardapio">
            <p>Terreno no Eco Vilage</p>
            <p>1.126m2</p>
            <p>R$480.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('Corais do Arraial')}>
          <div className="img-cardapio">
            <img src={imovel3} alt="Imóvel 3"/>
          </div>
          <div className="txt-cardapio">
            <p>Corais do Arraial</p>
            <p>3 dormitórios</p>
            <p>R$1.650.000,00</p>
          </div>
        </div>
      </div>
      <div className="space">.</div>
      <div id="cardapio-box">
        <div className="cardapio" onClick={() => handleWhatsAppClick('Estrada da Balsa')}>
          <div className="img-cardapio">
            <img src={imovel2} alt="Imóvel 2"/>
          </div>
          <div className="txt-cardapio">
            <p>Estrada da Balsa</p>
            <p>3 suítes</p>
            <p>R$1.950.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('Sítio Panorama')}>
          <div className="img-cardapio">
            <img src={imovel6} alt="Imóvel 6"/>
          </div>
          <div className="txt-cardapio">
            <p>Sítio Panorama</p>
            <p>4 dormitórios</p>
            <p>R$1.490.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/chacara/-sitio/-fazenda/venda/porto-seguro/01-estrada-arraial-trancoso-na-chegada-de-vale-verde/580581021-6')}>
          <div className="img-cardapio">
            <img src={imovel5} alt="Imóvel 5"/>
          </div>
          <div className="txt-cardapio">
            <p>Sítio Bela Vista</p>
            <p>4 dormitórios</p>
            <p>R$2.500.000,00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardapio;
