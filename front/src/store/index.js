import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

let store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;