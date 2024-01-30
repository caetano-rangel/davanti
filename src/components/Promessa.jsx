import '../styles/components/promessa.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Promessa() {
    AOS.init();
    return (
        <div id="promessa-box">
            <div data-aos= "fade-up" data-aos-duration="2000" className="txt-promessa">
                <p>Descubra o privilégio à beira-mar com o atendimento exclusivo da 
                    RE/MAX DAVANTI, líder imobiliária no Extremo Sul da Bahia.    
                    Permita-nos encontrar seu imóvel de alto padrão de forma ágil, transformando sua 
                    vida urbana em uma morada tranquila ou investimento seguro junto ao mar.<br></br><br></br> Em parceria 
                    conosco, descubra o imóvel ideal para viver ou investir no paraíso, utilizamos um método 
                    reservado a uma seleta porcentagem de sortudos que já vivenciam essa experiência paradisíaca. 
                    Ao escolher sua propriedade conosco, aproveite vantagens adicionais, como consultoria 
                    personalizada, tour VIP por Arraial d'Ajuda, visitas aos imóveis selecionados e condições 
                    de financiamento especialmente planejada.<br></br><br></br>
                    Clique agora para iniciar sua transformação em direção à residência ou terreno dos seus 
                    sonhos e viva a vida que realmente merece.</p>
            </div>
        </div>
    )
  }

  export default Promessa