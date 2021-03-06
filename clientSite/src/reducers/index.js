//list of reducers
import { combineReducers } from "redux";
import main from "./main";
import options from "./options";
export default combineReducers({ main, options });
