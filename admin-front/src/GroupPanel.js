import React, { Component } from 'react';
import CtrlButton from './CtrlButton'

class GroupPanel extends Component {
	render() {
		return (
			<div className="group_panel">
				<h2>{this.props.groupname}</h2>
				<div className="buttons">
			        <CtrlButton text="testtest" isActive={false} />
			        <CtrlButton text="testtest" isActive={true} />
			    </div>
			</div>
		);
	}
}

export default GroupPanel;