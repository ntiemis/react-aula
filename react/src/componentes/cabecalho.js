import React, { Component } from 'react';
import './cabecalho.css';
import MenuItem from './MenuItem'

class cabecalho extends Component {
  render() {
    return (
        <header>
            <h1> Título </h1>
            <nav>
                <MenuItem texto="facebook" endereco="http://fb.com"/>
                <MenuItem texto="snapchat" endereco="http://snapchat.com"/>
                <MenuItem texto="MySpace" endereco="http://myspace.com"/>
                <MenuItem texto="Pudim" endereco="http://pudim.com.br"/>                
            </nav>
        </header>
    );
  }
}

export default cabecalho;