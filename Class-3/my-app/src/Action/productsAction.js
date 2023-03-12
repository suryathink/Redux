const productsAction = (productsInfo,dispatch) =>{
   dispatch({
    type:"PRODUCTS",
    payload:productsInfo,
   });
}

export default productsAction