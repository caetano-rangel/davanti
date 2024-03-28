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
import Titulo from './components/Titulo';
import Pagina from './components/Pagina';
import Cardapio from './components/Cardapio';

import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from '/src/imagens/logo.png'


function App() {
  
  const formularioRef = useRef();

  const scrollToFormulario = () => {
    formularioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  AOS.init();
  return (
    <div id="site-body">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <div className="imagem-home">
      <img src={logo} className='logo'/>
        <div className="txt-img">
          <h1 data-aos= "fade-up" data-aos-duration="2000">Descubra o conceito do Luxo Imobiliário</h1>
          <br></br>
          <h2 data-aos= "fade-up" data-aos-duration="2000">em Arraial D'Ajuda - BA</h2>
        </div>
        <button data-aos= "fade-up" data-aos-duration="2000" className='btn-app' onClick={scrollToFormulario}>
          <p className="txt-btn-app">Saiba mais</p>
        </button>
      </div>
      <Pagina />
      <Gradient />
      <Titulo />
      <Imoveis />
      <Cardapio />
      <FormBtn scrollToFormulario={scrollToFormulario}/>
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
