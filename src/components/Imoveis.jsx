import '../styles/components/imoveis.sass';
import {motion} from 'framer-motion'
import { useState, useEffect, useRef } from 'react';

import image1 from '../imagens/costa.jpeg'
import image2 from '../imagens/costa.jpeg'
import image3 from '../imagens/costa.jpeg'
import image4 from '../imagens/costa.jpeg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [image1, image2, image3, image4]

function Imoveis() {
  AOS.init();
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div data-aos= "fade-up" data-aos-duration="2000" className="container">
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div 
        className='inner'
        drag="x"
        dragConstraints={{ right: 0, left: -width}}
        >

        {images.map(image => (
          <motion.div className='item' key={image}>
            <img src={image} alt="texto"/>
          </motion.div>
        ))}

        </motion.div>
      </motion.div>
    </div>
  );
}

export default Imoveis;
