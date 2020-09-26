import { takeEvery, put } from "redux-saga/effects";

{/*
* getAllTodo function is used to get all items from backend
* 
* @error {error} Error from backend
* @return {allTodo} List of todo
*/}
function* getAllItems() {
  try {
    const response = yield fetch(
      "http://localhost:3000/items/"
    ).then((response) => response.json());
    let items = yield response;
    yield put({ type: "INITIAL_LOAD_SAGA", items });
  } catch (error) {
    yield put({ type: "INITIAL_LOAD_SAGA", error });
  }
}

//initialLoad function used to call getAllTodo
export function* initialLoad() {
  yield takeEvery("INITIAL_LOAD", getAllItems);
}

