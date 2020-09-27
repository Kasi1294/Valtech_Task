import React from "react";
import createMiddleWare from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "./redux/reducers/rootReducer";
import rootSaga from "./saga/rootSaga";

import ItemsGrid from "./components/home_page/ItemsGrid";
import Form from "../src/components/detail_page/Form"

//Middleware for the saga
const sagaMiddleWare = createMiddleWare();

//Redux store
const store = createStore(RootReducer, applyMiddleware(sagaMiddleWare));

//Running the rootsaga in middleware
sagaMiddleWare.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <ItemsGrid />
      <Form />
    </Provider>
  );
}
