import myStore from "../Redux_Store/Store";

export const myAction = (data) => {
//   alert(data);

  myStore.dispatch({
    type: "NAME",
    payload:data,
  });

};
