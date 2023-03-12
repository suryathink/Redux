import { legacy_createStore as createStore , applyMiddleware ,combineReducers} from "redux";
import myReducer from "../Reducer/myReducer";
import logger from "redux-logger"; // middleware

import productReducer from "../Reducer/productReducer"
const combinedReducers =  combineReducers({myReducer:myReducer,productReducer:productReducer});

const myStore = createStore(combinedReducers, applyMiddleware(logger));

export default myStore;
