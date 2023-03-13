
let initialData = {
    products:[],
}
const productReducer =(state = initialData,action)=>{
  if (action.type ==="PRODUCTS"){
    return {
        ...state,
        products:action.payload,
    }
  }
    return state;
}

export default productReducer;