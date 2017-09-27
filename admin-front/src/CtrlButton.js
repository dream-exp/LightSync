import React, { Component } from 'react';

import CurrColor from './CurrColor'

class CtrlButton extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isActive: this.props.isActive
		}

		this.clickHandle = this.clickHandle.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.isActive)
			this.setState({ isActive: false });
	}

	clickHandle() {
		this.props.parentMethod(this.props.sendColors);
		this.setState({
			isActive: true
		});
	}

	render() {
		console.log(this.props.sendColors)
		return (
			<div className="ctrl_button">
				<button className={this.state.isActive ? "active ctrl_btn" : "ctrl_btn"} onClick={this.clickHandle} >
					{this.props.text}
				</button>
				<div className="thumbnails">
					{this.props.sendColors.map((color, i) => {
						let style = { background: color }
		             	return <span style={style} key={i} className="color_thumbnail" />;
		            })}
	            </div>
			</div>
		);
	}
}

export default CtrlButton;