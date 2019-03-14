import {REMOVE_ITEM, ADD_ITEM, UPDATE_ITEM} from '../constants';

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}
export const addItem = (name,amount) => {
  return {
    type: ADD_ITEM,
    name,
    amount
  }
}
export const updateItem = (value, type, id) => {
  console.log('called');
  return {
    type: UPDATE_ITEM,
    value,
    updateType: type,
    id
  }
}
