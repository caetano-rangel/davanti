import '../styles/components/prova.sass'

import image1 from '../imagens/patricia.jpeg'
import image2 from '../imagens/patricia.jpeg'
import image3 from '../imagens/patricia.jpeg'
import image4 from '../imagens/patricia.jpeg'

function ProvaSocial() {
    return (
      <div id="container">
        <div class="img-container">
          <img src={image1}></img>
        </div>
        <div class="img-container">
          <img src={image2}></img>
        </div>
        <div class="img-container">
          <img src={image3}></img>
        </div>
        <div class="img-container">
          <img src={image4}></img>
        </div>
      </div>
    )
  }

  export default ProvaSocial