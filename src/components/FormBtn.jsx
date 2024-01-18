import '../styles/components/formBtn.sass'

import AOS from 'aos';
import 'aos/dist/aos.css';

function FormBtn({ scrollToFormulario }) {
  AOS.init();

  const handleClick = () => {
    if (scrollToFormulario) {
      scrollToFormulario();
    }
  };

    return (
      <div data-aos= "fade-up" data-aos-duration="1000" id="form-btn">
        <button  className='btn' onClick={handleClick}>
          <p className="nome">Quero Saber Mais</p>
        </button>
      </div>
    )
  }

  export default FormBtn