import React,{useState} from "react";
import { myAction } from "../Action/Action";
var myStyle ={
 width:"500px",
 margin:"100px auto",
 padding:"50px",
 boxShadow:"0 0 10px black"
}
const Input = () => {
    const [state,setState] = useState("")
    const sendDatatoAction =() =>{
    myAction(state)
    }
  return (
    <div style={myStyle}>
    <h3>Input Component</h3>
      <input type="text" placeholder="Enter Name" onChange={(e)=>{setState(e.target.value)}} />
      <button onClick={sendDatatoAction}>Send Data to Redux</button>
    </div>
  );
};

export default Input;
