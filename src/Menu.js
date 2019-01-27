import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
  
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light sticky-top justify-content-center  d-flex flex-f" style={{backgroundColor: "#74AE48"}}>
      <a class="navbar-brand" onClick={() => this.props.onChangeActive('Index')}>Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item active">
      <a class="nav-link" onClick={() => this.props.onChangeActive('Index')}>Quienes somos <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" onClick={() => this.props.onChangeActive('Seguridad')}>Seguridad alimentaria</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" onClick={() => this.props.onChangeActive('Talleres')}>Talleres y conferencias</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" onClick={() => this.props.onChangeActive('Terapia')}>Atención terapeutica</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" onClick={() => this.props.onChangeActive('Convenios')}>Convenios</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" onClick={() => this.props.onChangeActive('Financiero')}>Estados Financieros</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" onClick={() => this.props.onChangeActive('Benefactores')}>Benefactores</a>
      </li>
      </ul>
      </div>
      </nav>
      );
    }
  }
  
  export default Menu;