import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userListReducer from '../reducers/useres';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      useres: userListReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
