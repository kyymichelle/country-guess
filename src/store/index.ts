import { createStore, combineReducers } from 'redux';
import { countriesReducer } from './countries/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  // const middlewares = [thunkMiddleware];
  // const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    // composeWithDevTools(middleWareEnhancer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}
