import { addManyCustomersAction } from '../reducers/fetchData';

export const fetchCustomers = () => function (dispatch) {
  fetch('http://localhost:3001/users')
    .then((response) => response.json())
    .then((json) => dispatch(addManyCustomersAction(json)))
    .catch(error => {
      throw(error);
  })
};
