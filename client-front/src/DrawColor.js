import React, { Component } from 'react';

class DrawColor extends Component {
	render() {
		var style = {
			backgroundColor: this.props.color["color"]
		}
		console.log(style)
		return (
			<div className="drawColor" style={style} />
		);
	}
}

export default DrawColor;