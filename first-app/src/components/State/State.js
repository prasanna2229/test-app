import React, { Component } from "react";

class State extends Component {
  constructor(){
    super();
    this.state={
      title:'Pothys',
      address:'Chennai'
    }
  }
    updatetitle=()=>{
      // this.state.title="Rajmahal"
      // 
      this.state({title:'rajmahal'},()=>{
        console.log("this.state inside callback",this.state)
      })
      console.log("this.state",this.state)
  }
    updateaddress=()=>{
      this.state.address="Madurai"
      console.log("this.state",this.state)
    }
  render() {
    return(
      <React.Fragment>
        <div>
        {this.state.title} Address is {this.state.address}
        <button onClick={this.updatetitle}>change title</button>
        <button onclick={this.updateaddress}>change address</button>
        </div>
      </React.Fragment>
    )
   
  }
}

export default State;
