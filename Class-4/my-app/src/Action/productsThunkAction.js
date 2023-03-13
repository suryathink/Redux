// const productThunkAction = (dispatch,getState)=>{
//    if (getState().productReducer.products.length===0){

//        fetch("https://fakestoreapi.com/products")
//        .then((res) => res.json())
//        .then((data) => {
//           console.log(data);
//           dispatch({
//             type: "PRODUCTS",
//             payload: data,
//           });
//        });
//        };
//    }

// export default productThunkAction
// "https://fakestoreapi.com/products"


// thunk Action creator is a js function that return thunk action

const thunkActionCreator = (api) => {
  return (dispatch, getState) => {
    if (getState().productReducer.products.length === 0) {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch({
            type: "PRODUCTS",
            payload: data,
          });
        });
    }
  };
};


export default  thunkActionCreator