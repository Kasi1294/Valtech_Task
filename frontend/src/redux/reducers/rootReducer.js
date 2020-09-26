import { combineReducers } from "redux";

import cardReducer from "./cardReducer";

//rootReducer is a root reducer function for TODO app
const rootReducer = combineReducers({ cardReducer });

export default rootReducer;
