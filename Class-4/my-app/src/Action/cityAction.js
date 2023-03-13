import myStore from "../Redux_Store/Store";
export const cityAction = (cityData,dispatch) => {
//   alert(cityData);

  dispatch({
    type:"CITY",
    payload:cityData,
  })
};
