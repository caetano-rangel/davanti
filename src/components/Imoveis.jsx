import '../styles/components/imoveis.sass';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import image1 from '../imagens/patricia/casapatricia.jpg';
import image2 from '../imagens/orlando/casaorlando.jpg';
import image3 from '../imagens/juliana/casajuliana.jpg';
import image4 from '../imagens/casajefferson.jpg';
import image5 from '../imagens/empreendimentos/costa.jpeg';
import image6 from '../imagens/empreendimentos/noah.jpg';
import image7 from '../imagens/empreendimentos/reservapraia.jpg';
import image8 from '../imagens/empreendimentos/vilas.jpg';
import image9 from '../imagens/empreendimentos/nampur.jpeg';
import image10 from '../imagens/empreendimentos/pitinga.jpeg';
import image11 from '../imagens/juliana/pousada-juliana.jpeg'
import image12 from '../imagens/patricia/area-pat.jpeg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { path: image1, name: "Estrada dos Macacos - Trancoso", whatsapp: "73998483936", gallery: [image6, image5, image8, image5, image6, image8, image6, image6] },
  { path: image2, name: "Estrada Arraial Trancoso", whatsapp: "73998483936",},
  { path: image3, name: "Mirante dos Corais", whatsapp: "73998483936",},
  { path: image4, name: "Vale Verde - Arraial d'Ajuda", whatsapp: "73998483936", link:"https://www.remax.com.br/pt-br/imoveis/chacara/-sitio/-fazenda/venda/porto-seguro/01-estrada-arraial-trancoso-na-chegada-de-vale-verde/580581021-6" },
  { path: image5, name: "Costa Verde Club", whatsapp: "73998483936",},
  { path: image6, name: "Condomínio Noah", whatsapp: "73998483936",},
  { path: image7, name: "Reserva da Praia", whatsapp: "73998483936",},
  { path: image8, name: "Vilas do Sol", whatsapp: "73998483936",},
  { path: image9, name: "Nampur Azul", whatsapp: "73998483936",},
  { path: image10, name: "Residencial Pitinga", whatsapp: "73998483936",},
  { path: image11, name: "Pousada Centro Arraial", whatsapp: "73998483936",},
  { path: image12, name: "Area", whatsapp: "73998483936",},
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
    <div data-aos="fade-up" data-aos-duration="2000" className="container">
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
  );
}

export default Imoveis;
