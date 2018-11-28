import React from "react";
import MainScreen from "../MainScreen";
import CategoryDetails from "./CategoryDetails";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "../js/store/index";


const MainApp = () => (
  <Provider store={store}>
    <Router>
      <MainScreen path="/" />
      <CategoryDetails path="category/:categoryId" />
    </Router>
  </Provider>
);
export default MainApp;
