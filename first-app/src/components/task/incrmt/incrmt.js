import React, { Component } from "react";
import './incrmt.css';
class Incrmt extends Component {
  render() {
    return(
      <>
      <div className="tool">
        <button onClick={this.props.changeValue}>increment</button>
        
        </div>
        </>
    )
  }
}


export default Incrmt;
