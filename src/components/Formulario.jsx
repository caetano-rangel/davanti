import '../styles/components/formulario.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Formulario() {
  AOS.init();
    return (
      <div data-aos= "fade-up" data-aos-duration="2000" id="container-form">
        <h1 className='txt-form'>Formulario</h1>
        <form className='form'>
          <input 
          className="input" 
          type="text"
          placeholder='email' 
          />
          <input 
          className="input" 
          type="text"
          placeholder='telefone'
          />
          <input
          className='input'
          placeholder='digite sua mensagem'
          />
          <button className='btn-form'>Enviar</button>
        </form>
      </div>
    )
  }

  export default Formulario