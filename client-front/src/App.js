import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';
import Wait from './Wait'
import Splash from './Splash'
import DrawColor from './DrawColor'

let socket = io('http://192.168.0.5:3000')

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      status: "Splash", // Splash, DrawColor
      color: ""
    };
  }

  componentDidMount() {
    socket.on('greeting', color => {
      this.setState({color: color})
    });

    this.interval = setTimeout(()=>{
      this.setState({
        status: "DrawColor"
      });
    }, 3000);
  }

  render() {
    console.log(this.state.color)
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
          <DrawColor color={this.state.color}/>
        );
    }
  }
}

export default App;
