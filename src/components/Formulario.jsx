import '../styles/components/formulario.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

function Formulario() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();
    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos!");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send("service_el5lbg1", "template_3666ffq", templateParams, "cqulBXDdMUGj89_2K")
    .then((response) => {
      console.log("email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    },(error) => {
      console.log("erro: ", error)
    })
  }

  AOS.init();
    return (
      <div data-aos= "fade-up" data-aos-duration="2000" id="container-form">
        <h1 className='txt-form'>Formulario</h1>
        <form className='form' onSubmit={sendEmail}>
          <input 
          className="input" 
          type="text"
          placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
          <input 
          className="input" 
          type="text"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
          <input
          className='input'
          placeholder='digite sua mensagem'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          />
          <input className='btn-form' type='submit' value='Enviar'/>
        </form>
      </div>
    )
  }

  export default Formulario