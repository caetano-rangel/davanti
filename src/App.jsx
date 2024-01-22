import React, { useRef } from 'react';
import './styles/components/app.sass'
import FormBtn from './components/FormBtn'
import Imoveis from './components/Imoveis'
import Grafico from './components/Grafico'
import Video from './components/Video'
import Promessa from './components/Promessa'
import Corretores from './components/Corretores'
import ProvaSocial from './components/ProvaSocial'
import QuemSomos from './components/QuemSomos'
import Formulario from './components/Formulario'
import Contato from './components/Contato'
import Rodape from './components/Rodape'
import Gradient from './components/Gradient'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const formularioRef = useRef();

  const scrollToFormulario = () => {
    formularioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  AOS.init();
  return (
    <div id="site-body">
      <div className="imagem-home">
        <div className="txt-img">
          <h1 data-aos= "fade-up" data-aos-duration="2000">Descubra o conceito do Luxo Imobiliario</h1>
          <br></br>
          <h2 data-aos= "fade-up" data-aos-duration="2000">em Arraial D'Ajuda</h2>
        </div>
      </div>
      <Gradient />
      <FormBtn scrollToFormulario={scrollToFormulario}/>
      <Imoveis />
      {/* <Grafico /> */}
      <Video />
      <Promessa />
      <FormBtn scrollToFormulario={scrollToFormulario}/>
      {/* <Corretores /> */}
      <ProvaSocial />
      <QuemSomos />
      <div className="form" ref={formularioRef}>
        <Formulario />
      </div>
      <Contato />
      <Rodape />
    </div>
  )
}

export default App
