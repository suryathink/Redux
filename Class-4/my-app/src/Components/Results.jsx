import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
 

    let data = useSelector((storeData) => {
     return storeData.myReducer
    });

  return (
    <div>
      <h1>Result Component</h1>
     <dl>
      <dt><b>Name</b></dt>
      <dd style={{color:"green"}}>{data.name}</dd>
      <dt><b>City</b></dt>
      <dd style={{color:"red"}}>{data.city}</dd>
     </dl>
    </div>
  );
};

export default Results;
