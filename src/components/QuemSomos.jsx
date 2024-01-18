import '../styles/components/quemSomos.sass'

import image1 from '../imagens/equipe.jpeg'

function QuemSomos() {
    return (
      <div id="somos-box">
        <p className='txt'>quem somos</p>
        <img src={image1} className='img-quem'/>
      </div>
    )
  }

  export default QuemSomos