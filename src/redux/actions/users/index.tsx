import { user_actions as types } from "../../../redux/types";
import { Product, UserPart } from "../../../types/index";
import { AppDispatch } from "../../../redux/store";
import { Action, ActionCreator } from "redux";

export const setUser = (user: UserPart): ActionCreator<Action> => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: types.SET_USER,
      payload: user
    });
};

export const addToCart = (product: Product): ActionCreator<Action> => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: types.ADD_CART,
      payload: product
    });
};
export const clearCart = (): ActionCreator<Action> => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: types.CLEAR_CART
    });
};

export type ReduxUsersActionTypes =
  | ReturnType<typeof setUser>
  | ReturnType<typeof addToCart>
  | ReturnType<typeof clearCart>;
