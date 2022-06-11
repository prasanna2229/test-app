import react from 'react';
import './App.css';
import test2 from './test2';
import { useState } from 'react';

const App = ()=>{
  const[input,setInput] = useState("");
  const[todos,setTodos] = useState([]);

return <div className='container'>
    <div className='app-wrapper'>
    <input type="text" className='inp' onKeyUp = 'my function()' placeholder='search..'/>
   <script>
     <ul>
       <li><a href='#' title ></a></li>
     </ul>
   </script>
<table width="800px" border="2px" cellPadding='15px'>
      <tbody>
        <tr >
          <td>ID</td>
          <td align='center'>TITLE</td>
        </tr>
        
          
            {test2.map((json)=>
            {
              return(
                <tr>
              <td>{json.id} </td>
              <td align='center '>{json.title}</td>
              </tr>
              )
            }

            )}
          
        
      </tbody>
 </table>
    </div>
    

  </div>;
};
  

export default App;
