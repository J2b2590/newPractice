import React, { Component } from "react";
import Sum from "./sum";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      arr: [1, 2, 3, 4, 5, 6, 7, 8],
      target: 5,
    };
  }

  num = undefined;

  componentDidMount() {
    let num = setInterval(this.increase, 100);
  }
  componentWillUnmount() {
    clearInterval(this.num);
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div>
        <Sum />
        <div class="count">
          <nav>
            <h1>h1 nav</h1>
            <p>p tag nav</p>
            <a href="*">A tag</a>
          </nav>
          {/* <span>{this.state.counter}</span>
        <button onClick={this.increase}>UP</button>
        <button onClick={this.reset}>reset</button> */}
        </div>
      </div>
    );
  }
}

export default App;
