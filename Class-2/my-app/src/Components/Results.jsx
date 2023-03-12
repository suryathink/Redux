import React, { useState } from "react";
import myStore from "../Redux_Store/Store";
import { useSelector } from "react-redux";

const Results = () => {
  // const [state,setState] = useState("");
  // // whenver my store will get updated this callback function will be called
  // myStore.subscribe(() => {
  //   setState(myStore.getState().name)
  // });

  let data = useSelector((storeData) => {
    return storeData;
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
