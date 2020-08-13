import React from "react";
import Home from "../pages/Home";
import { StaticRouter } from "react-router-dom";
import Router from "../routers/index";
import { Provider } from "react-redux";

const App = ({ location, context ,store}) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <Router />
      </StaticRouter>
    </Provider>
  );
};

export default App;
