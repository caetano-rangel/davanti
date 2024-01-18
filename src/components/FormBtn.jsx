import '../styles/components/formBtn.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

function FormBtn() {
  AOS.init();
    return (
      <div data-aos= "fade-up" data-aos-duration="1000" id="form-btn">
        <button  className='btn'>
          <p className="nome">Quero Saber Mais</p>
        </button>
      </div>
    )
  }

  export default FormBtn