import React, { Component } from 'react';
import logo from './logo.gif';

class Splash extends Component {
  render() {
    return (
		<div className="splash">
        	<img src={logo} className="logo" alt="LightSync" />
     	</div>
    );
  }
}

export default Splash;