import '../styles/components/imoveis.sass';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

//carrosel
import image1 from '../imagens/casajefferson.jpg';
import image2 from '../imagens/empreendimentos/costa.jpeg';
import image3 from '../imagens/empreendimentos/noah.jpg';
import image4 from '../imagens/empreendimentos/reservapraia.jpg';
import image5 from '../imagens/empreendimentos/vilas.jpg';
import image6 from '../imagens/empreendimentos/nampur.jpeg';
import image7 from '../imagens/empreendimentos/pitinga.jpeg';

import jefferson1 from '../imagens/jefferson/jefferson1.jpeg';
import jefferson2 from '../imagens/jefferson/jefferson2.jpeg';
import jefferson3 from '../imagens/jefferson/jefferson3.jpeg';
import jefferson4 from '../imagens/jefferson/jefferson4.jpeg';
import jefferson5 from '../imagens/jefferson/jefferson5.jpeg';
import jefferson6 from '../imagens/jefferson/jefferson6.jpeg';
import jefferson7 from '../imagens/jefferson/jefferson7.jpeg';
import jefferson8 from '../imagens/jefferson/jefferson8.jpeg';
import jefferson9 from '../imagens/jefferson/jefferson9.jpeg';

import costa1 from '../imagens/empreendimentos/costa/costa1.jpeg';
import costa2 from '../imagens/empreendimentos/costa/costa2.jpeg';
import costa3 from '../imagens/empreendimentos/costa/costa3.jpeg';
import costa4 from '../imagens/empreendimentos/costa/costa4.jpeg';
import costa5 from '../imagens/empreendimentos/costa/costa5.jpeg';
import costa6 from '../imagens/empreendimentos/costa/costa6.jpeg';
import costa7 from '../imagens/empreendimentos/costa/costa7.jpeg';
import costa8 from '../imagens/empreendimentos/costa/costa8.jpeg';

import noah1 from '../imagens/empreendimentos/noah/noah1.jpeg';
import noah2 from '../imagens/empreendimentos/noah/noah2.jpeg';
import noah3 from '../imagens/empreendimentos/noah/noah3.jpeg';
import noah4 from '../imagens/empreendimentos/noah/noah4.jpeg';
import noah5 from '../imagens/empreendimentos/noah/noah5.jpeg';
import noah6 from '../imagens/empreendimentos/noah/noah6.jpeg';
import noah7 from '../imagens/empreendimentos/noah/noah7.jpeg';
import noah8 from '../imagens/empreendimentos/noah/noah8.jpeg';
import noah9 from '../imagens/empreendimentos/noah/noah9.jpeg';
import noah10 from '../imagens/empreendimentos/noah/noah10.jpeg';

import reserva1 from '../imagens/empreendimentos/reserva/reserva1.jpeg';
import reserva2 from '../imagens/empreendimentos/reserva/reserva2.jpeg';
import reserva3 from '../imagens/empreendimentos/reserva/reserva3.jpeg';
import reserva4 from '../imagens/empreendimentos/reserva/reserva4.jpeg';
import reserva5 from '../imagens/empreendimentos/reserva/reserva5.jpeg';
import reserva6 from '../imagens/empreendimentos/reserva/reserva6.jpeg';
import reserva7 from '../imagens/empreendimentos/reserva/reserva7.jpeg';
import reserva8 from '../imagens/empreendimentos/reserva/reserva8.jpeg';
import reserva9 from '../imagens/empreendimentos/reserva/reserva9.jpeg';

import sol1 from '../imagens/empreendimentos/sol/sol1.jpeg';
import sol2 from '../imagens/empreendimentos/sol/sol2.jpeg';
import sol3 from '../imagens/empreendimentos/sol/sol3.jpeg';
import sol4 from '../imagens/empreendimentos/sol/sol4.jpeg';
import sol5 from '../imagens/empreendimentos/sol/sol5.jpeg';
import sol6 from '../imagens/empreendimentos/sol/sol6.jpeg';
import sol7 from '../imagens/empreendimentos/sol/sol7.jpeg';
import sol8 from '../imagens/empreendimentos/sol/sol8.jpeg';
import sol9 from '../imagens/empreendimentos/sol/sol9.jpeg';

import pitinga1 from '../imagens/empreendimentos/pitinga/pitinga1.jpeg';
import pitinga2 from '../imagens/empreendimentos/pitinga/pitinga2.jpeg';
import pitinga3 from '../imagens/empreendimentos/pitinga/pitinga3.jpeg';
import pitinga4 from '../imagens/empreendimentos/pitinga/pitinga4.jpeg';
import pitinga5 from '../imagens/empreendimentos/pitinga/pitinga5.jpeg';
import pitinga6 from '../imagens/empreendimentos/pitinga/pitinga6.jpeg';
import pitinga7 from '../imagens/empreendimentos/pitinga/pitinga7.jpeg';
import pitinga8 from '../imagens/empreendimentos/pitinga/pitinga8.jpeg';
import pitinga9 from '../imagens/empreendimentos/pitinga/pitinga9.jpeg';
import pitinga10 from '../imagens/empreendimentos/pitinga/pitinga10.jpeg';



import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { path: image7, name: "Residencial Pitinga", whatsapp: "73998483936", gallery: [pitinga1, pitinga2, pitinga3, pitinga4, pitinga5, pitinga6, pitinga7, pitinga8, pitinga9, pitinga10], },
  { path: image6, name: "Nampur Azul", whatsapp: "73998483936",},
  { path: image5, name: "Vilas do Sol", whatsapp: "73998483936", gallery: [sol1, sol2, sol3, sol4, sol5, sol6, sol7, sol8, sol9], },
  { path: image3, name: "Condomínio Noah", whatsapp: "73998483936", gallery: [noah1, noah2, noah3, noah4, noah5, noah6, noah7, noah8, noah9, noah10], },
  { path: image2, name: "Costa Verde Club", whatsapp: "73998483936", gallery: [costa1, costa2, costa3, costa4, costa5, costa6, costa7, costa8], },
  { path: image4, name: "Reserva da Praia", whatsapp: "73998483936", gallery: [reserva1, reserva2, reserva3, reserva4, reserva5, reserva6, reserva7, reserva8, reserva9], },
  { path: image1, name: "Vale Verde - Arraial d'Ajuda", whatsapp: "73998483936", gallery: [jefferson1, jefferson2, jefferson3, jefferson4, jefferson5, jefferson6, jefferson7, jefferson8, jefferson9], link:"https://www.remax.com.br/pt-br/imoveis/chacara/-sitio/-fazenda/venda/porto-seguro/01-estrada-arraial-trancoso-na-chegada-de-vale-verde/580581021-6", },
  
];

function Imoveis() {
  AOS.init();
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleNameClick = (whatsapp, link) => {
    const message = `Olá, estou interessado(a) no imóvel ${link}. Podemos conversar?`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setCurrentGallery(images[index].gallery);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const navigateGallery = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? currentGallery.length - 1 : prevIndex - 1));
    } else if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex === currentGallery.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
    <p className="titulo-imoveis">Empreendimentos</p>
    <div className="container">
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map(({ path, name, whatsapp, link }, index) => (
            <motion.div
              className='item'
              key={path}
              style={{ maxHeight: '340px' }}
              onClick={() => openGallery(index)}
            >
              <img src={path} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <p className='nome-img' onClick={() => handleNameClick(whatsapp, link)}>{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {galleryOpen && (
        <div className="gallery-overlay">
          <div className="gallery">
            <button className='btn-gallery' onClick={() => navigateGallery('prev')}>
              <i className="fas fa-chevron-left"></i> {/* Ícone de seta para a esquerda */}
            </button>
            <img src={currentGallery[currentImageIndex]} alt={images[currentImageIndex].name} />
            <button className='btn-gallery' onClick={() => navigateGallery('next')}>
              <i className="fas fa-chevron-right"></i> {/* Ícone de seta para a direita */}
            </button>
          </div>
          <button className='fechar' onClick={closeGallery}>Fechar</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Imoveis;