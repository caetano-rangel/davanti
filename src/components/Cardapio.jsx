import '../styles/components/cardapio.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

import imovel1 from '../imagens/patricia/casapatricia.jpg';
import imovel2 from '../imagens/orlando/casaorlando.jpeg';
import imovel3 from '../imagens/juliana/casajuliana.jpg';
import imovel4 from '../imagens/sergio/sergio.jpeg';
import imovel5 from '../imagens/jefferson/jefferson2.jpeg';
import imovel6 from '../imagens/beth/beth.jpeg';
import imovel7 from '../imagens/orlando/corais.jpeg';
import imovel8 from '../imagens/orlando/mirante.jpeg';
import imovel9 from '../imagens/orlando/trancoso.jpeg';

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
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/hotel/venda/porto-seguro/1-estrada-dos-macacos-proximo-ao-cemei/580581003-7')}>
          <div className="img-cardapio">
            <img src={imovel1} alt="Imóvel 1"/>
          </div>
          <div className="txt-cardapio">
            <p>Estrada dos Macacos</p>
            <p>15 dormitórios</p>
            <p>R$2.990.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/terreno/venda/porto-seguro/qb-18-condominio-eco-village-estrada-arraia-trancoso/580581024-6')}>
          <div className="img-cardapio">
            <img src={imovel4} alt="Imóvel 4"/>
          </div>
          <div className="txt-cardapio">
            <p>Terreno no Eco Vilage</p>
            <p>1.126m2</p>
            <p>R$480.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/casa/venda/porto-seguro/trilha-ecologica/580581006-31')}>
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
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/hotel/venda/porto-seguro/01-rua-das-palmeiras-delegacia-e-corpo-de-bombeiro/580581002-63')}>
          <div className="img-cardapio">
            <img src={imovel2} alt="Imóvel 2"/>
          </div>
          <div className="txt-cardapio">
            <p>São Francisco</p>
            <p>15 suítes</p>
            <p>R$5.405.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/casa/venda/porto-seguro/40-alameda-fernando-verissimo-vasconcelos-sitio-panorama/580581023-11')}>
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
      <div className="space">.</div>
      <div id="cardapio-box">
        <div className="cardapio" onClick={() => handleWhatsAppClick('')}>
          <div className="img-cardapio">
            <img src={imovel7} alt="Imóvel 7"/>
          </div>
          <div className="txt-cardapio">
            <p>Rua do Mirante</p>
            <p>3 suítes</p>
            <p>R$2.200.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/casa/venda/porto-seguro/05-corais-do-arraial-rua-do-mirante/580581002-72')}>
          <div className="img-cardapio">
            <img src={imovel8} alt="Imóvel 8"/>
          </div>
          <div className="txt-cardapio">
            <p>Corais do Arraial</p>
            <p>5 dormitórios</p>
            <p>R$2.500.000,00</p>
          </div>
        </div>
        <div className="cardapio" onClick={() => handleWhatsAppClick('https://www.remax.com.br/pt-br/imoveis/casa/venda/porto-seguro/05-trancoso-estrada-dos-macacos/580581002-59')}>
          <div className="img-cardapio">
            <img src={imovel9} alt="Imóvel 9"/>
          </div>
          <div className="txt-cardapio">
            <p>Trancoso</p>
            <p>3 suítes</p>
            <p>R$2.350.000,00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardapio;
