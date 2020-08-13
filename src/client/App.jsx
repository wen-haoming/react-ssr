import React from "react";
import Home from "@/pages/Home";
import "../assets/global.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../routers/index";
import { Provider } from "react-redux";
import storeFunc from "../store";

let store = storeFunc()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
