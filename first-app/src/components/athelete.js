import React, {Component} from "react";

class Athelete extends React.Component {
  constructor(){
    super();
    this.state = {
        atheleteData :[],
    }
}

componentDidMount(){
    fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
    .then(res => res.json())
    .then(rev=>{
      console.log(rev);
      this.setState({atheleteData:rev})
    })
}
render(){
  var { atheleteData } = this.state;
  //obj = {name : 'a',age : 10} const{ age } = obj
  return(
    <>
     {/* <h1> atheleteData </h1>
     <ol>
       {atheleteData && atheleteData.length>0 && atheleteData.map((aht,index)=>{
         return<li> {aht.athelete}</li>

       })} */}
     {/* </ol>/ */}
     <div>
       <u>  Athelete details </u>

       <table width="1000px" border="1px">
         <thead>
           <tr>
             <td><b>athelete name</b></td>
             <td><b>age</b></td>
             <td><b>sport</b></td>
             <td><b>country</b></td>
             <td><b>gold</b></td>
             <td><b>silver</b></td>
           </tr>
         </thead>
         <tbody>
           {atheleteData.map((item)=>{
             return(
               <tr>
                 <td key={item.id}>{item.athlete}</td>
                 <td key={item.id}>{item.age}</td>
                 <td key={item.id}>{item.sport}</td>
                 <td key={item.id}>{item.country}</td>
                 <td key={item.id}>{item.gold}</td>
                 <td key={item.id}>{item.silver}</td>
               </tr>
             )
           }
           )}
         </tbody>

       </table>
     </div>
    </>
  )
}
}
export default Athelete;