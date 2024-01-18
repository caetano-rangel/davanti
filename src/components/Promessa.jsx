import '../styles/components/promessa.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Promessa() {
    AOS.init();
    return (
        <div id="promessa-box">
            <div data-aos= "fade-up" data-aos-duration="2000" className="txt-promessa">
                <p>Explore a exclusividade à beira-mar com a expertise 
                    da RE/MAX Davanti, a principal imobiliária do Extremo 
                    Sul da Bahia. Permita-nos encontrar seu imóvel de alto 
                    padrão de maneira eficiente, proporcionando a 
                    metamorfose da sua vida urbana para uma existência 
                    serena à beira-mar. <br></br><br></br>
                    Em parceria conosco, encontramos 
                    o imóvel perfeito para viver ou investir no paraíso, 
                    desvende o método reservado a uma seleta porcentagem 
                    de afortunados que já desfrutam dessa experiência 
                    paradisíaca. Ao adquirir sua propriedade conosco, 
                    beneficie-se de vantagens adicionais, incluindo 
                    consultoria personalizada, tour VIP pelos imóveis 
                    selecionados e condições de financiamento 
                    especialmente desenhadas. <br></br><br></br>
                    Clique agora para 
                    iniciar sua jornada em direção à residência ou 
                    terreno dos seus sonhos e viva a vida que 
                    verdadeiramente merece."</p>
            </div>
            {/* <img src="/src/imagens/costa.jpeg" className='img' alt="" /> */}
        </div>
    )
  }

  export default Promessa