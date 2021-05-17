import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { useMemo } from "react";
import { RootStateOrAny } from "react-redux";
import reducers  from "_redux/reducers";

let store: Store | null;

const initStore = (initialState: RootStateOrAny) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

export const initializeStore = (preloadedState: RootStateOrAny) : Store => {
  let _store = store ?? initStore(preloadedState);

  // merge current redux state with preloaded redux state
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // reset current store
    store = null;
  }

  if (typeof window == "undefined") return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: RootStateOrAny) : Store {
  return useMemo<Store>(() => initializeStore(initialState), [initialState]);
}

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = ReturnType<typeof initializeStore>["dispatch"];
