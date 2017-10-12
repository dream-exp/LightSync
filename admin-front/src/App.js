import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';
import CurrColor from './CurrColor'
import CtrlButton from './CtrlButton'


let socket = io('http://lightsync.xyz')

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currColors : []
    };

    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(colorList) {
    socket.emit("control color", {colors : colorList});
    this.setState({
      currColors : colorList
    });
  }

  render() {
    return(
      <div className="controller">
        <header>
          <img src="logo.png" />
          <div className="current_colors">
            {this.state.currColors.map((color, i) => {
              return <CurrColor color={color} key={i} />;
            })}
          </div>
        </header>
        <div className="group_panel">
          <h2>Group1(グループの特徴)</h2>
          <div className="buttons">
              <CtrlButton text="Start" isActive={false} sendColors={["#cc4214", "#cc13b6"]} parentMethod={this.changeColor} />
              <CtrlButton text="2曲目が始まったタイミング" isActive={false} sendColors={["#13aacc"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#CEACBB", "#cc13b6"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#CDD010"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#1425CE", "#cc13b6"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#000000"]} parentMethod={this.changeColor} />
          </div>
        </div>
        <div className="group_panel">
          <h2>Group2(グループの特徴)</h2>
          <div className="buttons">
              <CtrlButton text="testtest" isActive={false} sendColors={["#8DB5CF", "#26D511", "#F74816"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#CDD010"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#BA0ACE", "#B7D292"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#2D00CC"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#CEACBB", "#CC31C0"]} parentMethod={this.changeColor} />
          </div>
        </div>
        <div className="group_panel">
          <h2>Group3(グループの特徴)</h2>
          <div className="buttons">
              <CtrlButton text="testtest" isActive={false} sendColors={["#CC000A", "#CFD008"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#17BACE", "#1CD51A", "#9DFF5A"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#AE00CC"]} parentMethod={this.changeColor} />
          </div>
        </div>
        <div className="group_panel">
          <h2>Group4(グループの特徴)</h2>
          <div className="buttons">
              <CtrlButton text="testtest" isActive={false} sendColors={["#cc4214", "#cc13b6"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#CDD010"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#4DD405", "#cc13b6"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#13aacc"]} parentMethod={this.changeColor} />
              <CtrlButton text="testtest" isActive={false} sendColors={["#CEACBB", "#A6D407"]} parentMethod={this.changeColor} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
