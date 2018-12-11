import React, { Component } from 'react';

// @flow

type Props = {
  result: number
};

type State = {

};

class Result extends Component<Props, State>{
  state = {

  };

  render() {
    return (
      <div>
          {this.state.result !== null ? <p>Result: {this.props.result}</p> : null}
      </div>
    );
  }
}

export default Result;