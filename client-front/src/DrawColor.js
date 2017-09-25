import React, { Component } from 'react';

class DrawColor extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			color: "yellow",
		};
	}

	render() {
		var style = {
			backgroundColor: this.state.color
		}
		return (
			<div className="drawColor" style={style} />
		);
	}
}

export default DrawColor;