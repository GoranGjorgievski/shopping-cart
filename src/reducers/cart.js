import {
  generateData,
} from '../helpers';
import {
  REMOVE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
} from '../constants';


const INITIAL_STATE = {
  items: generateData()
};

export const actionsMap = {
    [REMOVE_ITEM]: (state, action) => {
        return {...state, items: state.items.filter(item => item.id !== action.id)};
    },
    [ADD_ITEM]: (state, action) => {
        const newItems = [{
          id: Math.random(10), //bad :)
          name: action.name,
          amount: action.amount
        }, ...state.items];

        return {
          ...state,
          items: [...newItems],
        }
    },
   [UPDATE_ITEM]: (state, action) => {
      if(action.updateType === 0){//Name
        const updatedItems = state.items.map(item => {
          if(item.id === action.id){
            return {
              ...item,
              name: action.value,
            }
          }else return {...item}
        });

        return {
          ...state,
          items: [...updatedItems],
        }
      }else{//Amount
        const updatedItems = state.items.map(item => {
        if(item.id === action.id){
          return {
            ...item,
            amount: action.value,
          }
        }else return {...item}
      });

      return {
        ...state,
        items: [...updatedItems],
      }
     }
   }
};

export default function cartReducer(
    state = INITIAL_STATE,
    action = {}
) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}
