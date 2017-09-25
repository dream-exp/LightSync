import React, { Component } from 'react';
import './App.css';
import Wait from './Wait'
import Splash from './Splash'
import DrawColor from './DrawColor'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      status: "Splash", // Splash, DrawColor
    };
  }

  componentDidMount() {
    this.interval = setTimeout(()=>{
      this.setState({
        status: "Wait"
      });
    }, 1000);
  }

  render() {
    switch(this.state.status) {
      case "Wait":
        return (
          <Wait />
        );
      case "Splash":
        return (
          <Splash />
        );
      case "DrawColor":
        return (
          <DrawColor />
        );
    }
  }
}

export default App;
