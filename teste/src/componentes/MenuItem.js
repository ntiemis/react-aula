import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
    render() {
    return (
        <a className="menuitem" href={this.props.endereco || "http://www.pudim.com.br"}>
            {this.props.texto || "Link"}
        </a>
    );
  }
}

export default MenuItem;