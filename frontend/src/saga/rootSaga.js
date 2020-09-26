import {all, fork} from "redux-saga/effects";
import {initialLoad} from './cardSaga'

{
  /**
  * rootSaga is a root function for 
  * initialLoad, saveTodo saga function 
  */

}

export default function* rootSaga() {
    yield all([fork(initialLoad)]);
  }