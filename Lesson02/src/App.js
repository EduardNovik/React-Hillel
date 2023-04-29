import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Stepan",
      age: 25,
    };
  }
  changePerson = () => {
    this.state.name === "Stepan"
      ? this.setState({ name: "Mykola", age: 30 })
      : this.setState({ name: "Stepan", age: 25 });
  };

  render() {
    return (
      <>
        <p>
          Name: {this.state.name}, age: {this.state.age}
        </p>
        <button onClick={this.changePerson}>Click on me</button>
      </>
    );
  }
}



