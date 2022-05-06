import { Store } from '../store/store';
import POSTS_DATA from '../types/types';

function fetchAllPost() {
  const url = 'http://localhost:3001/users';
  fetch(url)
    .then((data) => data.json())
    .then((response) => (response.length > 0
      ? Store.dispatch({
        type: POSTS_DATA,
        data: response,
      })
      : []));
}

export { fetchAllPost };
