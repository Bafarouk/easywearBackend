import { createStore,applyMiddleware,compose, configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
export default  configureStore({
  reducer: rootReducers,
  middleware: [thunk,reduxImmutableStateInvariant() ]
});
//export default function configureStore(initialState){                                                                                                                                           
//const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENTION_COMOPOSE__ || compose;
//return createStore(
  //rootReducers,initialState,composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
//);

//};
