import { createStore, applyMiddleware } from "redux";
import myReducer from "../Reducer/myReducer";
import logger from "redux-logger"; // middleware

// import myReducer from "../Reducer/Myreducer";

// creating redux store and storing its reference in mystore variable
const myStore = createStore(myReducer, applyMiddleware(logger));

export default myStore;
