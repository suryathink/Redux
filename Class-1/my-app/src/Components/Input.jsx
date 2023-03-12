import React from "react";
var myStyle ={
 width:"500px",
 margin:"100px auto",
 padding:"50px",
 boxShadow:"0 0 10px black"
}
const Input = () => {
  return (
    <div style={myStyle}>
    <h3>Input Component</h3>
      <input type="text" />
      <button>Send Data to Redux</button>
    </div>
  );
};

export default Input;
