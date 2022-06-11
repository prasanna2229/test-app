import React, { Component } from "react";

class Dcrmt extends Component {
  render() {
    return <div className="tool2">
      <button onClick={this.props.changeValue} className="tool2"> decrement</button>
    </div>;
  }
}

export default Dcrmt;
