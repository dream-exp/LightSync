class DrawColor extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			color: "#000000",
		};
	}
  render() {
    return (
      <div class="splash">
        <img src="logo.gif" class="logo">
      </div>
    );
  }
}