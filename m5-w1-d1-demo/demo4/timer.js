class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      'div',
      null,
      'Seconds: ',
      this.state.seconds
    );
  }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));