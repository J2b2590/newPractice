import React, { Component } from "react";
let newArr = [];
class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetArr: [],
    };
  }

  sumAlgo = () => {
    return this.props.arr.map((num) => {
      console.log();
      let newNum = num + 1;
      //   console.log(num, newNum);
      if (num && newNum === this.props.target) {
        console.log(num, newNum, "TARGET");
        newArr.push(num);
        newArr.push(newNum);
        console.log(newArr);
      }
      return <h1>TEST</h1>;
    });
  };
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
    return <div style={mystyle}>{this.sumAlgo()}</div>;
  }
}

export default Sum;
