import React, { Component } from 'react';
import './css/Footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
	static propTypes = {
		copyright : PropTypes.string
	};

  render() {
  	//Como no es requerida osea no es obligatoria
  	//Si existe copyright toma el valor si no existe asigna 
  	//variable copy con contenido React 2018
  	const {copyright = '&copy; React 2018'} = this.props;
    return (
      <div className="container Footer">
        <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
