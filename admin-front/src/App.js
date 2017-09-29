import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';

import CurrColor from './CurrColor'
import CtrlButton from './CtrlButton'


let socket = io('http://172.20.10.2:3001')

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currColors : []
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(colorList) {
    this.setState({
      currColors : colorList
    });
  }

  componentDidMount() {
    socket.on('greeting', color => {
      this.setState({ color: color });
    });
  }

  render() {
    return(
      <div>
        <header>
          <img src="logo.png" />
          <div className="current_colors">
            {this.state.currColors.map((color, i) => {
              return <CurrColor color={color} key={i} />;
            })}
          </div>
        </header>
        <div className="group_panel">
          <h2>Group1</h2>
          <div className="buttons">
              <CtrlButton text="testtest" isActive={false} sendColors={["#cc4214", "#cc13b6"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#13aacc"]} parentMethod={this.changeColor} />
          </div>
        </div>
        <div className="group_panel">
          <h2>Group2</h2>
          <div className="buttons">
              <CtrlButton text="testtest" isActive={false} sendColors={["#1cedc6", "#64f720"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#bfa12b"]} parentMethod={this.changeColor} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
