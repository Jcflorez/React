//Dependecies
import React, { Component } from 'react';
import PropType from 'prop-types';

//Assets
import './css/Content.css';


class Content extends Component {

  static propTypes = {
    body : PropType.object.isRequired
  }

  render() {
    const { body } = this.props;
    return (
      <div className="container Content">
          {body}
      </div>
    );
  }
}

export default Content;
