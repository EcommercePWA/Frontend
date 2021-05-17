import { User } from '_typing/index';
import { user_actions as types } from '_redux/types';
import { AnyAction } from 'redux';

const initialProducts: User = {
  name: '',
  uid: '',
  cart: []
};

export const userReducer = (state = initialProducts, { type, payload }: AnyAction) : User => {
  switch (type) {
    case types.SET_USER:
      return { ...state, ...payload };
    case types.ADD_CART:
      return { ...state, cart: [...state.cart, ...payload] };
    case types.CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
