import React, { Component } from 'react';

class CurrColor extends Component {
	render() {
		let style = { background: this.props.color }

		return (
			<span style={style}>
				{this.props.color}
			</span>
		);
	}
}

export default CurrColor;