import React, { Component } from 'react';

class Content extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.active=='Index'?
        <p>“Recordando que ante todo somos seres humanos que tenemos necesidades y metas, las aceptamos o no racionalmente. Una de la necesidades principales es el Vacío Personal de las emociones, sentimiento y caricias que deben ser llenados, ya que esto determina y organiza todos los procesos mentales y comportamiento total direccionad."
Daniel Goleman el autor del libro La Inteligencia Emocional con motivación al logro.
Siendo el amor la condición y necesidad del ser humano que nos permite sentir y expresar sentimientos.
DIGNIDAD: Es el reconocimiento de todos los derechos consagrados en la constitución política y no siempre garantizados por el Estado.
Por lo anterior la fundación creciendo con amor y dignidad hace una apuesta por la corresponsabilidad en favor de las comunidades mas vulnerables.</p>:this.props.active=='Financiero'?<div class="col-md">  
            <h2>Estados financieros</h2>
              <h3>
                Declaración de renta 2017
              </h3>
              <img src="images/estados_financieros/declaracion_2017.jpg" width="80%" alt="declaración de renta 2017"/>
              <h3>Balances</h3>
              <img src="images/estados_financieros/balance_1.jpg" width="80%" alt=""/>
              <img src="images/estados_financieros/balance_2.jpg" width="80%" alt=""/>
          </div>:<p></p>}
      </div>
    );
  }
}

export default Content;