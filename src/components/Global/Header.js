//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.IsRequired,
    items: PropTypes.string.IsRequired
  }

  render() {
    console.log(this.props);
    const title = this.props.title;
    const items = this.props.items;
    // Lo Mismo que lo de abajo
    //const {title, items} = this.props;
    return (
      <div className="container Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>  
        <div className="menu">
          {items && items.map(
            (item, key) => <span className="smenu"><button className="btn btn-outline-dark btn-sm" 
            key={key}><Link to={item.url}>{item.title}</Link></button></span>)}
        </div>
        <div className="title">
          <h2> {title} </h2>
        </div>
    </div>
    );
  }
}

export default Header;
