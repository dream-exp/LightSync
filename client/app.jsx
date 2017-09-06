import Wait from './Wait';

class LightSync extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			status: "wait"
		}
	}

	render() {
		if(this.state.status == "wait") {
			return( <Wait /> );
		}
	}
}

React.render(
	<LightSync />,
	document.getElementById('app-container')
);
