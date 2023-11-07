import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
