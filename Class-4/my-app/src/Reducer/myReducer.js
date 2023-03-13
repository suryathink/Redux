let initialData ={
    name:"MASAI",
    city:"Banglore",
    electronics:[],
    jewelery:[],
}

const myReducer = (state = initialData,action) => {
   
    if (action.type==="NAME"){
        return {
            ...state,
            name:action.payload,
        }
    }
     else if (action.type==="CITY"){
        return {
            ...state,
            city:action.payload,
        }
    }

    return state
};

export default myReducer;
