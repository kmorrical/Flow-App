import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// @flow

type Props = { /* ... */ };

type State = {
  count: number,
  result: number,
  input1: number,
  input2: number,
};

// function sample(x: number, y: number) {
//
// }

class App extends Component<Props, State>{
  state = {
    count: 0,
    result: null,
    input1: 0,
    input2: 0
  };

  getInput1 = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({result: null});
    this.setState({input1: parseInt(event.currentTarget.value)});
  }

  getInput2 = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({result: null});
    this.setState({input2: parseInt(event.currentTarget.value)});
  }

  add = (event: SyntheticEvent<HTMLButtonElement>) => {
    const x = this.state.input1 + this.state.input2;
    this.setState({result: x});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Let's try flow!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p color="slategrey">Add</p>
          <input onChange={this.getInput1}/>
          <br/>
          <input onChange={this.getInput2}/>
          <br />
          <button onClick={this.add}>Go!</button>
          {this.state.result !== null ? <p color="lightblue">Result: {this.state.result}</p> : null}
        </header>
      </div>
    );
  }
}

export default App;
