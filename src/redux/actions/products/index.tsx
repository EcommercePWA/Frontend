import { product_actions as types } from '_redux/types';
import { Product } from '_typing/index';
import { AppDispatch } from '_redux/store';
import { Action, ActionCreator } from 'redux';

export const addProduct = (product: Product): ActionCreator<Action> => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: types.ADD_PRODUCT,
      payload: product
    });
};

export const removeProduct = (product: Product): ActionCreator<Action> => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: types.REMOVE_PRODUCT,
      payload: product
    });
};

export const resetProduct = (): ActionCreator<Action> => {
  return (dispatch: AppDispatch) =>
    dispatch({
      type: types.RESET_PRODUCTS
    });
};

export type ReduxProductsActionTypes =
  | ReturnType<typeof addProduct>
  | ReturnType<typeof removeProduct>
  | ReturnType<typeof resetProduct>;
