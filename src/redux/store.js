import  { legacy_createStore as createStore } from "redux";
import menuReducer from './menu_reducer'

const store = createStore(menuReducer);

export default store;