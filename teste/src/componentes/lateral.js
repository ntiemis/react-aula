import React, { Component } from 'react';
import './lateral.css';
import cabecalho from './componentes/cabecalho';
import MenuItem from './MenuItem';

class lateral extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visivel: false
    }  

  render() {
    return (
      <div id="lateral">
            <h2>Menu Lateral</h2>
            <ul>
                <li>MenuItem</li>
                <li>MenuItem</li>
                <li>MenuItem</li>
            </ul>  
      </div>
    );
  }
}

export default lateral;