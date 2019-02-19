import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => dispatch => {
  axios
    .get('/api/items')
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
};

export const addItem = (name) => dispatch => {
  axios
    .post('/api/items', {
      name: name
    })
    .then(res => 
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteItem = (id) => dispatch => {
  axios
    .delete('/api/items/' + id)
    .then(res => 
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err => console.log(err));
};
