import {
  ADD_ITEM_SAGA,
  DELETE_ITEM_SAGA,
  INITIAL_LOAD_SAGA,
  UPDATE_ITEM_SAGA
} from "../actions/actions.types";

//Inital state for the TODO application
const initalState = {
  selectedItem: [],
  allItems: [],
};

{
  /**
   * cardReducer is a reducer function for Item app
   *
   * @param{state} default value is inital state
   * @param{action} action dispatch from UI
   * @return{object} new state
   */
}
const cardReducer = (state = initalState, action) => {
  switch (action.type) {
    case INITIAL_LOAD_SAGA:
      return {
        ...state,
        allItems: [...action.items, ...state.allItems],
      };
    case ADD_ITEM_SAGA:
      return {
        ...state,
        allItems: [...action.addedItem, ...state.allItems],
      };
    case UPDATE_ITEM_SAGA:
      return {
        ...state,
        allItems: [...action.updatedItem, ...state.addedItem],
      };
    case DELETE_ITEM_SAGA:
      return {
        ...state,
        allItems: state.allItems.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default cardReducer;
