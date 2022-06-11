import React from "react";

const Form =({input,setInput,todos,setTodos})=>{
  const onInputChange = ( event) =>{
    setInput(event.target.value);
  };
  const onFormSubmit = (event)=>{
    event.preventDefault();

  };
  
   
   
   return(
       <form onSubmit={onFormSubmit}>
       <div>
        <input type="text" 
        placeholder="enter a todo.." 
        className="task-input"/>
        value={input}
        required
        onChange={onInputChange}
        
           <button className="button-add" type="submit">Add
           </button>
         </div>
       <form/>
    )
}

export default Form;