import {
  ADD_ITEM,
  DELETE_ITEM,
  INITIAL_LOAD,
  UPDATE_ITEM
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
   * @param{addItem}
   * @return{type: ADD_ITEM}
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
   * @param{updateItem}
   * @return{type: UPDATE_ITEM}
   */
}
export const updateItem = (updateItem) => {
  return {
    type: UPDATE_ITEM,
    payLoad : updateItem,
    id : updateItem.id
  };
};

{
  /**
   * deleteItem is a action creator function
   * for delete item
   *
   * @param{deleteItem}
   * @return{type: INITIAL_LOAD}
   */
}
export const deleteItem = (deleteItem) => {
  return {
    type: DELETE_ITEM,
    id : deleteItem
  };
};
