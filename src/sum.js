import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetArr: [],
    };
  }
  render() {
    console.log(this.props);
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      margin: "auto, 0",
      textAlign: "center",
    };
    return (
      <div style={mystyle}>
        {this.props.arr.map((num) => {
          let newNum = num + 1;
          //   console.log(num, newNum);
          if (num && newNum === this.props.target) {
            console.log(num, newNum, "TARGET");
          }
        })}
      </div>
    );
  }
}

export default Sum;
