import React from "react";
import myStore from "../Redux_Store/Store";
const Results = () => {
  const reduxData = myStore.getState();
  return (
    <div>
      <h1>Result Component</h1>
      <h4>{reduxData.name}</h4>
    </div>
  );
};

export default Results;
