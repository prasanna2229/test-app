import React, { Component } from "react";
import Incrmt from './incrmt/incrmt';
import Dcrmt from'./incrmt/dcrmt/dcrmt';
import Reset from'./incrmt/dcrmt/reset/reset'; 

class Task extends Component {
  constructor(){
    super();
    this.state={
      value:   0
    }
  }
  updateNum=()=>{
    this.setState({value:this.state.value+1});
      console.log("this.state",this.state )
  }
  updateNum2=()=>{
    this.setState({value:this.state.value-1});
    console.log("this.state",this.state );
  }
  updatNum3=()=>{
    this.setState({value:this.state.value=0});
    console.log("this.state",this.state )
  }
  render() {
    return(
      <React.Fragment>
        <div>
            <h1>COUNTER APP</h1>
          <input type="text" value={this.state.value}></input>
          {/* {this.state.value} */}
         <Incrmt  changeValue={this.updateNum}></Incrmt>
         <Dcrmt  changeValue={this.updateNum2}></Dcrmt>
         <Reset changeValue={this.updatNum3}></Reset>
        </div>
      </React.Fragment>
    ); 
  }
}

export default Task;
