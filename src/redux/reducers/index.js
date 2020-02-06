import { combineReducers } from "redux";
import counter from "./counter";
import header from "./header";

export default combineReducers({ counter, header });