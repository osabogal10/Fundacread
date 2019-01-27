import React, { Component } from 'react';
import './App.css';
import {Button} from 'reactstrap';
import Menu from './Menu';
import Content from './Content'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      activePage:'Index'
    }

    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(page){
    this.setState({activePage:page});
  }

  render() {
    return (
      <div className="App">
        <section class="pt-5 pb-5 mt-0 align-items-center d-flex parallax">
        </section>
        <Menu onChangeActive={this.selectPage}></Menu>
        <Content active={this.state.activePage}></Content>
        <div class="container">
          <h1 align="center">Sitio en construcción</h1>
        
        </div>
      </div>
    );
  }
}

export default App;
