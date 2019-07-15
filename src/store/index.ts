import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  // system: systemReducer,
  // chat: chatReducer
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
