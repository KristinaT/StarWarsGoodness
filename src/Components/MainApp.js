import React from "react";
import MainScreen from "../MainScreen";
import CategoryDetails from "./CategoryDetails";
import { Router } from "@reach/router";

const MainApp = () => (
  <Router>
    <MainScreen path="/" />
    <CategoryDetails path="category/:categoryId" />
  </Router>
);
export default MainApp;
