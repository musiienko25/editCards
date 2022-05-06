import * as T from '../types/types';

const initialState = {
  customers: [],
  isLoaded: false,
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case T.ADD_MANY_CUSTOMERS:
      return { ...state, customers: action.payload };

    case T.EDIT_POST:
      const customers = state.customers.map((post) => {
        if (post.id === +action.id) {
          post = { ...post, ...action.data };
        }
        return post;
      });
      return { state, customers };
    default:
      return state;
  }
};

export const addManyCustomersAction = (payload) => ({
  type: T.ADD_MANY_CUSTOMERS,
  payload,
});
