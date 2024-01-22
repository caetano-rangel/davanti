import '../styles/components/imoveis.sass';
import {motion} from 'framer-motion'
import { useState, useEffect, useRef } from 'react';

import image1 from '../imagens/casapatricia.jpg'
import image2 from '../imagens/casaorlando.jpg'
import image3 from '../imagens/casajuliana.jpg'
import image4 from '../imagens/casajefferson.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { path: image1, name: "Casa Patricia" },
  { path: image2, name: "Casa Orlando" },
  { path: image3, name: "Casa Juliana" },
  { path: image4, name: "Casa Jefferson" }
];

function Imoveis() {
  AOS.init();
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="container">
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
        >
          {images.map(({ path, name }) => (
            <motion.div className='item' key={path}>
              <img src={path} alt={name} />
              <p className='nome-img'>{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Imoveis;
