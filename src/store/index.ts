import { createStore, combineReducers } from 'redux';
import { countriesReducer } from './countries/reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  // const middlewares = [thunkMiddleware];
  // const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    // composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
