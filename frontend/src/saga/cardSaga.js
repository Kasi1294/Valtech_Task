import { takeEvery, put } from "redux-saga/effects";

{
  /*
   * getAllItemsSaga function is used to get all items from backend
   *
   * @error {error} Error from backend
   * @return {all items} List of items
   */
}
function* getAllItemsSaga() {
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
  yield takeEvery("INITIAL_LOAD", getAllItemsSaga);
}

{
  /*
   * addItemSaga function is used to add new items to backend
   *
   * @error {error} Error from backend
   * @return {all items} List of items
   */
}
function* addItemSaga(addPayLoad) {
  try {
    const url = "http://localhost:3000/items/";
    const payLoad = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addPayLoad.payLoad),
    };
    const response = yield fetch(url, payLoad).then((response) =>
      response.json()
    );
    const addedItem = yield response;
    yield put({ type: "ADD_ITEM_SAGA", addedItem });
  } catch (error) {
    yield put({ type: "ADD_ERROR_ITEM_SAGA", error });
  }
}

//addItem function used to call addItemSaga
export function* addItem() {
  yield takeEvery("ADD_ITEM", addItemSaga);
}

{
  /*
   * updateItemSaga function is used to update a items in backend
   *
   * @error {error} Error from backend
   * @return {all items} List of items
   */
}
function* updateItemSaga(updatePayLoad) {
  try {
    const url = "http://localhost:3000/items/" + updatePayLoad.id;
    const payLoad = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePayLoad.payLoad),
    };
    const response = yield fetch(url, payLoad).then((response) =>
      response.json()
    );
    const updatedItem = yield response;
    yield put({ type: "UPDATE_ITEM_SAGA", updatedItem });
  } catch (error) {
    yield put({ type: "UPDATE_ERROR_ITEM_SAGA", error });
  }
}

//updateItem function used to call updateItemSaga
export function* updateItem() {
  yield takeEvery("UPDATE_ITEM", updateItemSaga);
}

{
  /*
   * deleteItemSaga function is used to delete a items in backend
   *
   * @error {error} Error from backend
   * @return {all items} List of items
   */
}
function* deleteItemSaga(deletePayLoad) {
  try {
    const url = "http://localhost:3000/items/" + deletePayLoad.id;
    const payLoad = {
      method: "DELETE",
    };
    const response = yield fetch(url, payLoad).then((response) =>
      response.json()
    );
    const itemId = yield deletePayLoad.id;
    yield put({ type: "DELETE_ITEM_SAGA", itemId });
  } catch (error) {
    yield put({ type: "DELETE_ERROR_ITEM_SAGA", error });
  }
}

//deleteItem function used to call deleteItemSaga
export function* deleteItem() {
  yield takeEvery("DELETE_ITEM", deleteItemSaga);
}
