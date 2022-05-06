import { combineReducers } from 'redux';
import { customerReducer } from './fetchData';

const AllReducer = combineReducers({
  customers: customerReducer,
});

export default AllReducer;
