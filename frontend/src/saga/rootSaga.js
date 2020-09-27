import {all, fork} from "redux-saga/effects";
import {initialLoad, addItem, updateItem, deleteItem} from './cardSaga'

{
  /**
  * rootSaga is a root function for 
  * initialLoad, saveTodo saga function 
  */

}

export default function* rootSaga() {
    yield all([fork(initialLoad), fork(addItem), fork(updateItem), fork(deleteItem)]);
  }