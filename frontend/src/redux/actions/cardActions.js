import {
  INITIAL_LOAD,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM
} from "./actions.types";

{
  /**
   * initialLoad is a action creator function
   * for initial data fetch
   *
   * @return{type: INITIAL_LOAD}
   */
}
export const initialLoad = () => {
  return {
    type: INITIAL_LOAD,
  };
};

{
  /**
   * addItem is a action creator function
   * for add item
   *
   * @return{type: INITIAL_LOAD}
   */
}
export const addItem = (addItem) => {
  return {
    type: ADD_ITEM,
    payLoad : addItem
  };
};

{
  /**
   * updateItem is a action creator function
   * for update item
   *
   * @return{type: INITIAL_LOAD}
   */
}
export const updateItem = (updateItem) => {
  return {
    type: UPDATE_ITEM,
    payLoad : updateItem
  };
};

{
  /**
   * deleteItem is a action creator function
   * for delete item
   *
   * @return{type: INITIAL_LOAD}
   */
}
export const deleteItem = (deleteItem) => {
  return {
    type: DELETE_ITEM,
    payLoad : deleteItem
  };
};
