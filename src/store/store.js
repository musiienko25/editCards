import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import AllReducer from '../reducers/allReducers';

const Store = createStore(AllReducer, applyMiddleware(thunk));

function StateMapper(state) {
  return state;
}

export { Store, StateMapper };
