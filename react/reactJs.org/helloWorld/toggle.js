class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));