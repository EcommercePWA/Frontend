import { combineReducers } from "redux";
import { productReducer } from "_redux/reducers/products";
import { userReducer } from "_redux/reducers/users";

const reducers = {
  user: userReducer,
  product: productReducer
};

export default combineReducers(reducers);

