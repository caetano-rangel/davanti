import '../styles/components/grafico.sass'

function Grafico() {
    return (
      <div id="grafico-box">
        <div className="grafico-ctn">
          <h2 className="titulo">compra</h2>
          <div className="grafico">
            <div className="grafico-img">
              <img src="/src/imagens/grafico.jpeg" className="img" alt="costa verde"/>
            </div>
            <p className="txt">poucas compras</p>
          </div>
        </div>
        
        <div className="grafico-ctn">
          <h2 className="titulo">venda</h2>
          <div className="grafico">
            <div className="grafico-img">
              <img src="/src/imagens/grafico.jpeg" className="img" alt="costa verde"/>
            </div>
            <p className="txt">muitas vendas</p>
          </div>
        </div>
      </div>
    )
  }

  export default Grafico