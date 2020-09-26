import {
  INITIAL_LOAD_SAGA,
} from "../actions/actions.types";

//Inital state for the TODO application
const initalState = {
  selectedItem: [],
  allItems : [],
};

{
  /**
   * cardReducer is a reducer function for card app
   * 
   * @param{state} default value is inital state
   * @param{action} action dispatch from UI 
   * @return {object} new state
   */
}
const cardReducer = (state = initalState, action) => {
  switch(action.type){
    case INITIAL_LOAD_SAGA:
      return {
        ...state,
        allItems: [ ...action.items, ...state.allItems],
      };
    default:
      return state;
  }
};

export default cardReducer;
