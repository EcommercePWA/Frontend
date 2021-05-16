import { Product } from "_typing/index";
import { product_actions as types } from "_redux/types";
import { AnyAction } from "redux";

const initialProducts: Product[] = [];

export const productReducer = (state = initialProducts, { type, payload }: AnyAction) : Product[] => {
  switch (type) {
    case types.ADD_PRODUCT:
      return [...state, payload];
    case types.REMOVE_PRODUCT:
      return state.filter((product) => product === payload);
    case types.RESET_PRODUCTS:
      return initialProducts;
    default:
      return state;
  }
};
