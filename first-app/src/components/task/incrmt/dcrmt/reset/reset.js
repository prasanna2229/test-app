import React, { Component } from "react";

class Reset extends Component {
  render() {
    return(
      // <>
      <div className="tool">
        <button onClick={this.props.changeValue}>Reset</button>
        </div>
        // </>
    )
  }
}

 
export default Reset;
