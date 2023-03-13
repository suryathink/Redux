import React,{useState} from "react";
import { cityAction } from "../Action/cityAction";
import { useDispatch } from "react-redux";

var myStyle ={
    width:"500px",
    margin:"100px auto",
    padding:"50px",
    boxShadow:"0 0 10px black"
   }

const City = () => {
    const [city,setCity] = useState("")
    const dispatch = useDispatch()

    function sendDatatoCityAction(){
        cityAction(city,dispatch)
    }
  return (
    <div style={myStyle}>
      <h2>City Component</h2>
      <input type="text" placeholder="Enter City" onChange={(e)=>{setCity(e.target.value)}} />
      <button onClick={sendDatatoCityAction}>Store City</button>
    </div>
  );
};

export default City;
